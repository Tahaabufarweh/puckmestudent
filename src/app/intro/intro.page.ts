import { Component, OnInit } from "@angular/core";
import { ModalController, MenuController } from "@ionic/angular";
import { LoginPage } from "../login/login.page";
import { SignupPage } from "../signup/signup.page";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { AlertService, DataService } from "../service";
import { Router } from "@angular/router";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.page.html",
  styleUrls: ["./intro.page.scss"],
})
export class IntroPage implements OnInit {
  userData;
  fcm;
  constructor(
    public modalController: ModalController,
    public router: Router,
    private fb: Facebook,
    public googlePlus: GooglePlus,
    public menu: MenuController,
    public alertSrv: AlertService,
    public dataSrv: DataService
  ) {
    menu.enable(false);
  }

  ngOnInit() {
    this.fcm = this.dataSrv.subscribePush();
  }

  async OpenLogin() {
    const modal = await this.modalController.create({
      component: LoginPage,
      componentProps: {
        address: "",
        latt: null,
        long: null,
      },
    });
    return await modal.present();
  }

  async OpenRegister() {
    const modal = await this.modalController.create({
      component: SignupPage,
      componentProps: {
        address: "",
        latt: null,
        long: null,
      },
    });
    return await modal.present();
  }

  facebookLogin() {
    this.fb
      .getLoginStatus()
      .then((res: FacebookLoginResponse) => {
        if (res.status == "connected") {
          console.log("user connected already" + res.authResponse.accessToken);
          this.fb
            .api(
              `${res.authResponse.userID}?fields=id,name,email,first_name,last_name,gender,public_key`,
              []
            )
            .then((profile) => {
              this.userData = {
                id: profile["id"],
                name: profile["name"],
                email: profile["email"],
                first_name: profile["first_name"],
                last_name: profile["last_name"],
                gender: profile["gender"],
                public_key: profile["public_key"],
                access_token: res.authResponse.accessToken,
              };
              console.log(this.userData);
              this.createAccount(this.userData);
            });
        } else {
          console.log("USer Not login ");
          this.fb
            .login(["public_profile", "email"])
            .then((res: FacebookLoginResponse) => {
              console.log("Logged into Facebook!", JSON.stringify(res));
              this.fb
                .api(
                  `${res.authResponse.userID}?fields=id,name,email,first_name,last_name,gender,public_key`,
                  []
                )
                .then((profile) => {
                  this.userData = {
                    id: profile["id"],
                    name: profile["name"],
                    email: profile["email"],
                    first_name: profile["first_name"],
                    last_name: profile["last_name"],
                    gender: profile["gender"],
                    public_key: profile["public_key"],
                    access_token: res.authResponse.accessToken,
                  };
                  this.createAccount(this.userData);
                  console.log(this.userData);
                });
            })
            .catch((e) => {
              console.log("Error logging With Facebook");
            });
        }
      })
      .catch((e) => {
        console.log("Error logging With Facebook");
      });
  }

  googleLogin() {
    let options = {
      scopes: "", // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      webClientId:
        "373971382765-q67f9fn0polbl5t3l1t2afg6jn20slka.apps.googleusercontent.com", // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      offline: true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    };
    this.googlePlus
      .login({})
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  createAccount(data) {
    //alert("Creating Account")
    this.alertSrv.show();
    let DriverData = {};
    this.fcm = this.dataSrv.subscribePush();
    console.log(this.fcm);
    DriverData["name"] = data.name;
    DriverData["user_name"] = data.name;
    DriverData["password"] = null;
    DriverData["location"] =
      "lat: " + this.dataSrv.lat + " ,long: " + this.dataSrv.long;
    DriverData["car_id"] = null; // image
    DriverData["email"] = data.email;
    DriverData["phone"] = null;
    DriverData["card_id"] = null; // image
    DriverData["fcm_tokem"] = this.fcm;
    DriverData["photo"] = null; // image
    DriverData["driver_licence"] = null; // image
    DriverData["student_id"] = null; // image
    console.log(DriverData);
    let api = "api/register_studentٍٍٍ";
    this.dataSrv.httpPostMethod(api, DriverData).then((res) => {
      console.log(JSON.parse(res["data"]));
      this.alertSrv.hide();
      this.openHome();
      //   this.alertSrv.presentToast("You can Sign In Now.", "success")
    });
  }

  openHome() {
    this.dataSrv.resrAllImages();
    this.dataSrv.waiting = 1;
    localStorage.setItem("active_non", "0");
    this.router.navigate(["../wait"]);
  }
}
