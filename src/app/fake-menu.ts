import {Menu} from './_model/menu';


export var fakeMenu: Menu[] = [
  {
    "id": "1",
    "name": "Quản trị thế éo nào",
    "detailFile": "",
    "menuLevel": "1",
    "parentId": "0",
    "displayOrder": "1",
    "isLocalSite": "1"
  },
  {
    "id": "2",
    "name": "người dùng",
    "detailFile": "crud.jsp?crud_type=user_info/index.html",
    "menuLevel": "2",
    "parentId": "1",
    "displayOrder": "1",
    "isLocalSite": "1"
  },
  {
    "id": "3",
    "name": "nhóm người dùng",
    "detailFile": "crud.jsp?crud_type=role/index.html",
    "menuLevel": "2",
    "parentId": "1",
    "displayOrder": "2",
    "isLocalSite": "1"
  },
  {
    "id": "5",
    "name": "phân quyền người dùng",
    "detailFile": "crud.jsp?crud_type=user_role/index.html",
    "menuLevel": "2",
    "parentId": "1",
    "displayOrder": "3",
    "isLocalSite": "1"
  },
  {
    "id": "4",
    "name": "quản lý menu",
    "detailFile": "crud.jsp?crud_type=menu/index.html",
    "menuLevel": "2",
    "parentId": "1",
    "displayOrder": "6",
    "isLocalSite": "1"
  },
  {
    "id": "6",
    "name": "quyền truy cập menu",
    "detailFile": "crud.jsp?crud_type=menu_access/index.html",
    "menuLevel": "2",
    "parentId": "1",
    "displayOrder": "7",
    "isLocalSite": "1"
  },
  {
    "id": "15",
    "name": "quản lý",
    "detailFile": "cc",
    "menuLevel": "1",
    "parentId": "0",
    "displayOrder": "1",
    "isLocalSite": "2"
  },
  {
    "id": "16",
    "name": "chuyên mục người dùng",
    "detailFile": "crud.jsp?crud_type=category_user/index.html",
    "menuLevel": "2",
    "parentId": "15",
    "displayOrder": "1",
    "isLocalSite": "2"
  },
  {
    "id": "21",
    "name": "đợt thi",
    "detailFile": "crud.jsp?crud_type=subject/index.html",
    "menuLevel": "2",
    "parentId": "15",
    "displayOrder": "2",
    "isLocalSite": "2"
  },
  {
    "id": "22",
    "name": "danh sách đề thi",
    "detailFile": "crud.jsp?crud_type=bank_exam/index.html",
    "menuLevel": "2",
    "parentId": "15",
    "displayOrder": "3",
    "isLocalSite": "2"
  }
]
