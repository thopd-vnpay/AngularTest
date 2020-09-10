import {Menu} from './_model/menu';


export var fakeMenu: Menu[] = [
  {
    "id": "1",
    "name": "Quản trị thế éo nào",
    "detail_file": "",
    "menu_level": "1",
    "parent_id": "0",
    "display_order": "1",
    "is_local_site": "1"
  },
  {
    "id": "2",
    "name": "người dùng",
    "detail_file": "crud.jsp?crud_type=user_info/index.html",
    "menu_level": "2",
    "parent_id": "1",
    "display_order": "1",
    "is_local_site": "1"
  },
  {
    "id": "3",
    "name": "nhóm người dùng",
    "detail_file": "crud.jsp?crud_type=role/index.html",
    "menu_level": "2",
    "parent_id": "1",
    "display_order": "2",
    "is_local_site": "1"
  },
  {
    "id": "5",
    "name": "phân quyền người dùng",
    "detail_file": "crud.jsp?crud_type=user_role/index.html",
    "menu_level": "2",
    "parent_id": "1",
    "display_order": "3",
    "is_local_site": "1"
  },
  {
    "id": "4",
    "name": "quản lý menu",
    "detail_file": "crud.jsp?crud_type=menu/index.html",
    "menu_level": "2",
    "parent_id": "1",
    "display_order": "6",
    "is_local_site": "1"
  },
  {
    "id": "6",
    "name": "quyền truy cập menu",
    "detail_file": "crud.jsp?crud_type=menu_access/index.html",
    "menu_level": "2",
    "parent_id": "1",
    "display_order": "7",
    "is_local_site": "1"
  },
  {
    "id": "15",
    "name": "quản lý",
    "detail_file": "cc",
    "menu_level": "1",
    "parent_id": "0",
    "display_order": "1",
    "is_local_site": "2"
  },
  {
    "id": "16",
    "name": "chuyên mục người dùng",
    "detail_file": "crud.jsp?crud_type=category_user/index.html",
    "menu_level": "2",
    "parent_id": "15",
    "display_order": "1",
    "is_local_site": "2"
  },
  {
    "id": "21",
    "name": "đợt thi",
    "detail_file": "crud.jsp?crud_type=subject/index.html",
    "menu_level": "2",
    "parent_id": "15",
    "display_order": "2",
    "is_local_site": "2"
  },
  {
    "id": "22",
    "name": "danh sách đề thi",
    "detail_file": "crud.jsp?crud_type=bank_exam/index.html",
    "menu_level": "2",
    "parent_id": "15",
    "display_order": "3",
    "is_local_site": "2"
  }
]
