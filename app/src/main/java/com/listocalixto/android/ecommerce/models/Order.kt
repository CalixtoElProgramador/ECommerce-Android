package com.listocalixto.android.ecommerce.models

import com.google.gson.Gson
import com.google.gson.annotations.SerializedName

data class Order(
    @SerializedName("id") val id: String? = null,
    @SerializedName("id_client") val idClient: String,
    @SerializedName("id_delivery") var idDelivery: String? = null,
    @SerializedName("id_address") val idAddress: String,
    @SerializedName("status") val status: String? = null,
    @SerializedName("timestamp") var timestamp: String? = null,
    @SerializedName("products") val products: ArrayList<Product>,
    @SerializedName("client") val client: User? = null,
    @SerializedName("delivery") val delivery: User? = null,
    @SerializedName("address") val address: Address? = null
) {

    fun toJson(): String = Gson().toJson(this)

    override fun toString(): String {
        return "Order(id=$id, idClient='$idClient', idDelivery=$idDelivery, idAddress='$idAddress', " +
                "status=$status, timestamp=$timestamp, products=$products, client=$client, " +
                "delivery=$delivery, address=$address)"
    }

}
