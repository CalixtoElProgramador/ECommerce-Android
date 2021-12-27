package com.listocalixto.android.ecommerce.routes

import com.listocalixto.android.ecommerce.models.Category
import com.listocalixto.android.ecommerce.models.ResponseHttp
import com.listocalixto.android.ecommerce.models.User
import okhttp3.MultipartBody
import okhttp3.RequestBody
import retrofit2.Call
import retrofit2.http.*

interface UsersRoutes {

    @GET("users/findDeliveryMan")
    fun getDeliveriesMen(
        @Header("Authorization") token: String
    ): Call<ArrayList<User>>

    @POST("users/create")
    fun register(@Body user: User): Call<ResponseHttp>

    @FormUrlEncoded
    @POST("users/login")
    fun login(
        @Field("email") email: String,
        @Field("password") password: String
    ): Call<ResponseHttp>

    @Multipart
    @PUT("users/update")
    fun update(
        @Part image: MultipartBody.Part,
        @Part("user") user: RequestBody,
        @Header("Authorization") token: String
    ): Call<ResponseHttp>

    @PUT("users/updateWithoutImage")
    fun updateWithoutImage(
        @Body user: User,
        @Header("Authorization") token: String
    ): Call<ResponseHttp>

}