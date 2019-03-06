import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class ApiProvider {

  respond:any

  defaultUrl: any = "http://flawlessdigitalmarketing.co.za/api/index.php/user/";

  //login
  Login = this.defaultUrl + "FDMLogin"

  //Category
  Categories = this.defaultUrl + "FDMcategory/parent_id";

  //Sub category
  SubCategory = this.defaultUrl + "FDMsubCategory/parent_id/" ;

  //Products
  Products = this.defaultUrl + "/FDMproducts/id/";
  
  //send quote
  SendQuote = this.defaultUrl + "/FDMsendquote";

  // send quote discount
  SendQuotediscount = this.defaultUrl + "/FDMsendquotediscount";

  // send outstanding balance   FDMsendinvoice
  SendOutstanding = this.defaultUrl + "/FDMsendOutstanding";

  //send invoice  FDMsendinvoice
  SendInvoice = this.defaultUrl + "/FDMsendinvoice";

  //post quote path and total quote
  Usersendquote = this.defaultUrl + "Usersendquote";

  //post quote path and total quote
  UserProfilePic = this.defaultUrl + "userprofile/id/";

  //update user details
  UpdateUserProfile = this.defaultUrl + "userupdate";


  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  postupdateuserprofile(data){
    this.respond = this.http.post(this.UpdateUserProfile, data).map(res => res.json())
    return this.respond
  }


  getProfilePic(id) {
    this.respond = this.http.get(this.UserProfilePic + id).map(res => res.json())
    return this.respond
  }

  postUsersendquote(quote){

    this.respond = this.http.post(this.Usersendquote, quote).map(res => res.json())
    return this.respond

  }

  postSendInvoice(send) {
    this.respond = this.http.post(this.SendInvoice, send).map(res => res.json())
    return this.respond
  }

  postSendOutstanding(send){
    this.respond = this.http.post(this.SendOutstanding, send).map(res => res.json())
    return this.respond 
  }

  postSendQuotediscount(send){
    this.respond = this.http.post(this.SendQuotediscount, send).map(res => res.json())
    return this.respond 
  }

  postSendQuote(send){
    this.respond = this.http.post(this.SendQuote ,send).map(res => res.json())
    return this.respond 

  }

  getProducts(id){
    this.respond = this.http.get(this.Products + id).map(res => res.json())
    return this.respond 

  }

  getSubCategory(id){

    this.respond = this.http.get(this.SubCategory+id).map(res => res.json())
    return this.respond 

  }
 
  //category get function
  getCategories(){
   
   this.respond =  this.http.get(this.Categories).map(res => res.json())
   return this.respond

  }

  //login post function
  postLogin(Login) {

    this.respond = this.http.post(this.Login, Login).map(res => res.json())
    return this.respond


  }


}
