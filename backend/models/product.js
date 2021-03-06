const db = require('../config/config')

const Product = {};

Product.findByCategory = (id_category) => {
    const sql = `
    SELECT
        P.id,
        P.name,
        P.description,
        P.price,
        P.image00,
        P.image01,
        P.image02,
        P.id_category
    FROM
        products AS P
    INNER JOIN
        categories AS C
    ON
        P.id_category = C.id
    WHERE
        C.id = $1
    `;

    return db.manyOrNone(sql, id_category);

}

Product.create = (product) => {
    const sql = `
    INSERT INTO
        products(
            name,
            description,
            price,
            image00,
            image01,
            image02,
            id_category,
            created_at,
            updated_at
        )
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id
    `;

    return db.oneOrNone(sql, [
        product.name,
        product.description,
        product.price,
        product.image00,
        product.image01,
        product.image02,
        product.id_category,
        new Date(),
        new Date()
    ]);

}

Product.update = (product) => {
    const sql = `
    UPDATE
        products
    SET
        name = $2,
        description = $3,
        price = $4,
        image00 = $5,
        image01 = $6,
        image02 = $7,
        id_category = $8,
        updated_at = $9
    WHERE
        id = $1
    `;

    return db.none(sql, [
        product.id,
        product.name,
        product.description,
        product.price,
        product.image00,
        product.image01,
        product.image02,
        product.id_category,
        new Date()
    ]);

}

module.exports = Product;