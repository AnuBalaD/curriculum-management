import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { EDUKITE } from '../../../app-constants';
import { UtilsService } from '../index';


@Injectable()
export class CoreService {
  loggedInUser: any;
  authToken: any;
  growlData: any = {};
  data: any;
  private header = this.utils.getRequestOptions();
  private handleError(error: Response) {
    return Observable.throw(error.json().errorMessage);
  }

  constructor(private http: Http, private utils: UtilsService) {
  }


  register(req) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.REGISTER, JSON.stringify(req), this.utils.getRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  login(req) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.LOGIN, JSON.stringify(req), this.utils.getRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  forgotPassword(req) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.FORGOT_PSWD, JSON.stringify(req), this.utils.getRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  changePassword(req) {
    this.utils.getTempAuthToken();
    console.log(this.utils.tempAuthToken);
    console.log(EDUKITE.BASE + EDUKITE.APIS.CHANGE_PSWD+"/"+this.utils.tempAuthToken);
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.CHANGE_PSWD+"/"+this.utils.tempAuthToken, JSON.stringify(req), this.utils.getRequestOptions())
      .map((response: Response) => {
        console.log(this.utils.tempAuthToken);
        // this.growlData.push({ severity: 'success', summary: 'Successfully Changed the Password', detail: 'Order submitted' });
        return response.json();

      })
      //.catch(error => this.handleError(error));
  }

  resetPassword(req) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.RESET_PSWD, JSON.stringify(req), this.utils.getRequestOptions())
      .map((response: Response) => {
        // this.growlData.push({ severity: 'success', summary: '', detail: 'Order submitted' });
        return response.json();

      })
      //.catch(error => this.handleError(error));
  }

  logout() {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.LOGOUT, {}, this.utils.getAuthToken())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  addsubject(req) {
    return this.http.put(EDUKITE.BASE + EDUKITE.APIS.ADD_SUBJECT, (req), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  addgrade(req) {
    return this.http.put(EDUKITE.BASE + EDUKITE.APIS.ADD_GRADE, (req), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  addtopic(req) {
    return this.http.put(EDUKITE.BASE + EDUKITE.APIS.ADD_TOPIC, (req), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  getAllSubjects() {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.GET_ALL_SUBJECTS, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  getSubjectById(id) {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.GET_SUBJECT_BY_ID + id, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  deleteSubjectById(id) {
    return this.http.delete(EDUKITE.BASE + EDUKITE.APIS.GET_SUBJECT + id, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  getSubjectByGradeId(id) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.GET_SUBJECT_BY_GRADEID, ({ "gradeId": id }), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json().responseData;
      })
      .catch(error => this.handleError(error));
  }
  getAllGrade() {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.GET_ALL_GRADES, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  getGradeById(id) {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.GET_GRADE + id, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  getAllTopics() {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.GET_ALL_TOPICS, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  deleteTopicById(id) {
    return this.http.delete(EDUKITE.BASE + EDUKITE.APIS.GET_TOPIC + id, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  editGrade(grade) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.ADD_GRADE, (grade), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  editTopic(topic) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.ADD_TOPIC, (topic), this.utils.getAllRequestOptions())
      .map((response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  deleteGradeById(id) {
    return this.http.delete(EDUKITE.BASE + EDUKITE.APIS.GET_GRADE + id, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  getAllUsers() {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.GET_ALL_USERS, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  getAllAbusiveWords() {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.GET_ALL_ABUSE_WORDS, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  addAbusiveWord(req) {
    return this.http.put(EDUKITE.BASE + EDUKITE.APIS.POST_ABUSE_WORDS, (req), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        console.log(response);
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  deleteAbusiveWord(id) {
    return this.http.delete(EDUKITE.BASE + EDUKITE.APIS.DELETE_ABUSE_WORDS + id, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        console.log(response);
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  addQuestion(req) {
    return this.http.put(EDUKITE.BASE + EDUKITE.APIS.CREATE_QUESTION, (req), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        console.log(response);
        return response.json();
      })
  }

  getUserById(id) {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.GET_USER + id, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        console.log(response);
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  addAvatar(req) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.ADD_AVATAR, (req), this.utils.getAuthToken())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  getAllAvatar() {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.GET_ALL_AVATAR, {}, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  deleteAvatar(url) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.DELETE_AVATAR, (url), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  getSubjectsByGrade(grade) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.GET_SUBJECTS_BY_GRADE, (grade), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  getTopicsBySubject(subject) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.GET_TOPICS_SUBTOPICS_FOR_SUBJECT, (subject), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  getSubTopicsByParent(topic) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.GET_SUBTOPICS_AND_ASSETS_FOR_TOPIC, (topic), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  getAllSubscriptionPackages() {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.SUBSCRIPTION_PACKAGES, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  addSubscriptionPackage(req) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.SUBSCRIPTION_PACKAGES, (req), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  deleteSubscriptionPackage(id) {
    return this.http.delete(EDUKITE.BASE + EDUKITE.APIS.SUBSCRIPTION_PACKAGES + "/" + id, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  getSubscriptionPackageById(id) {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.SUBSCRIPTION_PACKAGES + "/" + id, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  editSubscriptionPackage(req) {
    return this.http.put(EDUKITE.BASE + EDUKITE.APIS.SUBSCRIPTION_PACKAGES, (req), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  getTopicsAndSubTopicsForTopic(topic) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.GET_SUBTOPICS_AND_ASSETS_FOR_TOPIC, (topic), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  getTopicById(id) {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.GET_TOPIC_BY_ID + id, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  updateTopic(topic) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.ADD_TOPIC, (topic), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  updateSubject(subject) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.ADD_SUBJECT, (subject), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  getAllAcademicYear() {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.GET_ALL_ACADEMIC_YEAR, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  addAsset(req) {
    return this.http.put(EDUKITE.BASE + EDUKITE.APIS.ADD_ASSET, (req), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  uploadAssetContent(serviceDocument) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.UPLOAD_ASSET_CONTENT, serviceDocument, this.utils.getAuthToken())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  uploadSubjectLogo(serviceDocument) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.UPLOAD_SUBJECT_LOGO, serviceDocument, this.utils.getAuthToken())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  uploadThumbanail(serviceDoc) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.UPLOAD_THUMBNAIL, serviceDoc, this.utils.getAuthToken())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  AddAcademicYear(tempObj) {
    return this.http.put(EDUKITE.BASE + EDUKITE.APIS.GET_ALL_ACADEMIC_YEAR, (tempObj), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  getAssetsForTopic(topic) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.GET_SUBTOPICS_AND_ASSETS_FOR_TOPIC, (topic), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  UpdateAcademicYear(tempObj) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.GET_ALL_ACADEMIC_YEAR, (tempObj), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  getAllAssets() {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.GET_ASSETS, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  getAssetById(id) {
    return this.http.get(EDUKITE.BASE + EDUKITE.APIS.GET_ASSET_BY_ID + id, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }
  updateAsset(asset) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.ADD_ASSET, (asset), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  deleteAssetById(id) {
    return this.http.delete(EDUKITE.BASE + EDUKITE.APIS.GET_ASSET_BY_ID + id, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  deleteAcademicYear(id) {
    return this.http.delete(EDUKITE.BASE + EDUKITE.APIS.GET_ALL_ACADEMIC_YEAR + '/' + id, this.utils.getAllRequestOptions())
      .map((response: Response) => {
        return response.json();
      })
      .catch(error => this.handleError(error));
  }

  addUser(req) {
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.ADD_USER, (req), this.utils.getAllRequestOptions())
      .map((response: Response) => {
        console.log(response);
        //this.growlData.push({ severity: 'success', summary: '', detail: 'User created successfully' });
        return response.json();
      })
      .catch(error => this.handleError(error));

  }

  getAssetByType(type){
    return this.http.post(EDUKITE.BASE + EDUKITE.APIS.GET_ASSET_BY_TYPE,(type), this.utils.getAllRequestOptions())
    .map((response: Response)=>{
      return response.json();

    })
    .catch(error => this.handleError(error));
  }


}
