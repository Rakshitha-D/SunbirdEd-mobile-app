
[![Circle CI - master branch](https://circleci.com/gh/Sunbird-Ed/SunbirdEd-portal/tree/master.svg?style=svg)](https://circleci.com/gh/Sunbird-Ed/SunbirdEd-mobile-app/tree/master.svg?style=svg)
[![Circle CI Badge](https://circleci.com/gh/Sunbird-Ed/SunbirdEd-mobile-app.svg?style=shield)]((https://circleci.com/gh/Sunbird-Ed/SunbirdEd-mobile-app.svg?style=shield))
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Sunbird-Ed_SunbirdEd-mobile-app&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Sunbird-Ed_SunbirdEd-portal)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Sunbird-Ed_SunbirdEd-mobile-app&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Sunbird-Ed_SunbirdEd-mobile-app)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Sunbird-Ed_SunbirdEd-mobile-app&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=Sunbird-Ed_SunbirdEd-mobile-app)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Sunbird-Ed_SunbirdEd-portal&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Sunbird-Ed_SunbirdEd-mobile-app)

💻 Tech Stack:
![TypeScript](https://img.shields.io/badge/typescript-%233772ff.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Ionic](https://img.shields.io/badge/ionic-%233772ff.svg?style=for-the-badge&logo=ionic&logoColor=white) ![Capacitor](https://img.shields.io/badge/capacitor-%230b9dff.svg?style=for-the-badge&logo=capacitor&logoColor=white) ![Cordova](https://img.shields.io/badge/Cordova-35434F?style=for-the-badge&logo=apache-cordova&logoColor=E8E8E8) ![Angular](https://img.shields.io/badge/angular-%23d6002f.svg?style=for-the-badge&logo=angular&logoColor=white) ![Android](https://img.shields.io/badge/android-%239fc037.svg?style=for-the-badge&logo=android&logoColor=white)
![Sqlite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

## What is the Sunbird Mobile app?
The Sunbird Mobile app is the app-based interface for the Sunbird application stack. It provides a app(android/ios) through which all functionality of Sunbird can be accessed.

Latest release- [release-5.2.0](https://github.com/Sunbird-Ed/SunbirdEd-mobile-app/releases/tag/release-5.2.0_RC13)

Ongoing release- [release-6.0.0](https://github.com/Sunbird-Ed/SunbirdEd-mobile-app/tree/release-6.0.0_v13)

Functionalities

## Project Source code Structure

```tree
├── app |
│   ├── components |
│   │   ├── access-discussion |
│   │   ├── acknowledge-response |
│   │   ├── add-activity-to-group |
│   │   ├── application-header |
│   │   ├── collection-acions |
│   │   ├── collection-child |
│   │   ├── common-forms |
│   │   ├── confirm-alert |
│   │   ├── content-actions |
│   │   ├── content-rating-alert |
│   │   ├── content-viewer |
│   │   ├── dashboard |
│   │   ├── detail-card |
│   │   ├── discover |
│   │   ├── enrollment-details |
│   │   ├── filteroption |
│   │   ├── license-card-component |
│   │   ├── notification-item |
│   │   ├── pb-horizontal |
│   │   ├── popups |
│   │   ├── profile-avatar |
│   │   ├── qr-scanner-ios |
│   │   ├── rating-alert |
│   │   ├── relevant-content-card |
│   │   ├── show-certificate-component |
│   │   ├── show-vendor-apps |
│   │   ├── sign-in-card |
│   │   ├── skeleton-item |
│   │   ├── support-acknowledgement |
│   │   └── upload-local |
│   ├── pages(...) |
│   └── tabs
├── assets |
│   ├── configurations |
│   ├── dummy |
│   ├── faq |
│   ├── fonts |
│   ├── i18n |
│   ├── icons |
│   ├── imgs |
│   ├── style
├── config
├── directives |
│   ├── custom-ion-select |
│   ├── hide-header-footer |
│   ├── read-mor
├── guards
├── pipes |
│   ├── alias-board-name |
│   ├── category-key-translator |
│   ├── category-pipe |
│   ├── csa |
│   ├── date-ago |
│   ├── file-size |
│   ├── filter |
│   ├── image-content |
│   ├── initial |
│   ├── mime-type |
│   ├── sortby |
│   ├── theme-icon-mapper |
│   ├── translate-html |
│   ├── translate-jso
├── services
├── theme
└── util
```

**Prerequisites:**
|Package| Version | Recommended  Version |
|--|--|--|
[Node](https://nodejs.org/en/) | 18+ | v18.20.5
[NPM](https://nodejs.org/en/) | 9+ | 9.2.0
[Python](https://www.python.org/downloads/) | 3+ | 3.12.3
[Capacitor](https://capacitorjs.com/) | 5+ | 5.5.1
[Ionic](https://ionicframework.com/docs/intro/cli) | 7 | 7.1.5
[Java(For Android)](https://www.oracle.com/in/java/technologies/downloads/) | 17+ | 17.0.5
[Gradle(For Android)](https://gradle.org/install/) | 8+ | 8.5


**Configuration files**
* #### config.properties
    * `app_name` : name of the app
    * `app_id` :   applicationId of the app
    * `app_version_code` :  app version code(Needs to be updated before playstore)

* #### environment.prod.ts
    * `APPLICATION_ID` : Application id of the instance
    * `BASE_URL` : Base url of the instance
    * `BUILD_TYPE` : Build type
    * `CHANNEL_ID` : Channel id
    * `DEBUG` :  Debug state ( true | false )
    * `FLAVOR`: App flavor or environment,
    * `MAX_COMPATIBILITY_LEVEL`: App compatibility level,
    * `MOBILE_APP_CONSUMER`: Mobile app consumer,
    * `MOBILE_APP_KEY`:  Key for API token generation,
    * `MOBILE_APP_SECRET`: Secret for API token generation,
    * `REAL_VERSION_NAME`: App version name,
    * `NAMESPACE`: App namespace for build app id,
    * `SUPPORT_EMAIL`: Support email id,
    * `USE_CRASHLYTICS`: false,
    * `VERSION_CODE`: App version code,
    * `VERSION_NAME`: App version name
    

    

**Project Setup**

**1. Ionic-Android build Setup**    
    - [Install java](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)    
    - [Install Gradle](https://gradle.org/install/)    
    - [Install Android Studio](https://developer.android.com/studio/)   
    - After Android studio installation, install SDK    
    - Open Android studio and goto `settings/appearance and behavior/system settings/Android SDK`    
    - Install appropriate Android sdk platform package.    
    - Add environment variables in `~/.bashrc` or `~/.bash_profile` as follows    
        ```export ANDROID_SDK_ROOT=path_to_sdk```    
        ```export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin```    
        ```export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools```    
    - Reference: https://ionicframework.com/docs/installation/android    
 
    CLI Setup    
    - `npm install -g ionic`   
    - `npm install -g capacitor`  
 
**2. Project Setup**    
    - git clone the repo(https://github.com/Sunbird-Ed/SunbirdEd-mobile-app).    
    - Rename `config.properties.example` file to `config.properties` and put all the valid credentials and api endpoint.   

    - Run `./build.sh`    
    - npm i
    - npx cap add android

    <!-- for windows -->
    install git-bash https://git-scm.com/download/win and run `./build.sh`

    <!-- For MacOS -->
      1. brew install python@3.10 
      2. Run nano .zshrc write export PYTHON=/opt/homebrew/bin/python3.10 
      3. Run source ~/.zshrc after you modify your .zshrc
      
    - Add the google-services.json file in the following locations:
      1. android/app directory
      2. configurations directory
    - Run export NODE_ENV=production in the terminal
    - Set Android SDK location in bashrc
        export ANDROID_HOME=<path to sdk>
        <path to sdk> can be found in Android Studio->Device Manager->SDK tools
        Run source ~/.bashrc after you modify your .bashrc
    - Add the SDK tools and platform-tools to PATH      
      export PATH=$PATH:$ANDROID_HOME/tools/bin
      export PATH=$PATH:$ANDROID_HOME/platform-tools



**3. Onboarding/Tabs Configuration**
    Onboarding steps and Tabs can be configured via this configuration settings.
**Onboarding Configurations**
|Name|Description|Options|
|----|-----|-----|
|Language Selection|User should select their prefered language|To skip language selection, set skip as false and provide default values|
|User Role Selection|User should select their role|If want to skip User Type selection, set skip as false and provide default user type|
|Profile Settings|User should set their profile by choosing their framework fields|Provide deafult profile values to skip profile settings page|
|District Maping|Here user need to provide details related to their location|To skip this page deafult location values are required|
#### Language Selection
```
{
  "onboarding": [
    {
      "name": "language-setting",
      "skip": false,
      "default": {
        "code": "en",
        "label": "English"
      }
    }
  ]
}
```
#### User Role Selection
```
{
  "onboarding": [
    {
      "name": "user-type-selection",
      "skip": false,
      "default": "teacher"
    }
  ]
}
```
#### Profile Settings
```
{
  "onboarding": [
    {
      "name": "profile-settings",
      "skip": false,
      "default": {
        "syllabus": [
          "CBSE"
        ],
        "board": [
          "cbse"
        ],
        "medium": [
          "english"
        ],
        "grade": [
          "class5",
          "class6"
        ]
      }
    }
  ]
}
```
#### District Maping
```
{
  "onboarding": [
    {
      "name": "district-mapping",
      "skip": false,
      "default": {
        "state": "Andaman & Nicobar Islands",
        "stateId": "83h3u832ui4",
        "district": "Nicobars",
        "districtId": "aef899d41"
      }
    }
  ]
}
```
**Tabs Page COnfigurations**
Configure the tabs page according to the requirement. Fllowing are the configurable settings for tabs.
```
{
  "tabs": [
    {
      "root": "home",
      "name": "home",
      "icon": {
        "active": "assets/imgs/tab_home_selected.svg",
        "inactive": "assets/imgs/tab_home.svg",
        "disabled": "assets/imgs/ic_home.png"
      },
      "label": "TAB_HOME",
      "index": 2,
      "isSelected": true,
      "is_visable": true,
      "disabled": false,
      "theme": "NEW",
      "status": "ALL",
      "userTypeAdmin": true
    }
  ]
}
```
|Property|Description|Value|
|----|----|----|
|`root`|On which page the tab should be shown.|`home`|
|`name`|Name given to the tab|`home`|
|`icon`|Different icons for respective events. i.e when the tab is selected, not seleted and disabled.|Object with path to the respectivr icons|
|`label`|Label name to displayed for the tab|'TAB_NAME'|
|`index`|At which position the tab should be displayed|numeric value ex: `2` shows at 2 position in order|
|`isSelected`|Wheather the tab should be selected by deafult|Boolean value ex: `true` default selected|
|`is_visable`|To display the tab or not|Boolean value|
|`disabled`|If `true`, tab is displayed, but can't select|Boolean. |
|`is_visable`|To display the tab or not|Boolean value|
|`theme`|Theme on which the tab should be displayed(If there are multiple theme for the app available)|name of theme for which tab has to be displayed|
|`status`|To display to a spefic user criteria|ex: 'logIn' will show to logged in users only|
|`userTypeAdmin`|Wheather to show for only Admin users|Boolean value|
  
**4. How to build apk**    
   - To check attached devices do `adb devices`    
   - `npm run ionic-build` (Make sure you have attached device)    
   - Apk location `project_folder/android/app/build/outputs/apk/apk_debug.apk`    
   
**5. How to update or add new appicon** 
    - Add the new icon.png file in assets folder in project root 
    - icon resolution should be 1024x1024
    - Run `npx @capacitor/assets generate --iconBackgroundColor '#eeeeee' --iconBackgroundColorDark '#222222'`
    github reference - https://github.com/ionic-team/capacitor-assets

**6. How to debug apk**    

   - Open chrome and enter `chrome://inspect`    
    - Select app    
