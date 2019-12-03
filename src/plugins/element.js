import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Checkbox,
  Message,
  MessageBox,
  Container,
  Header,
  Scrollbar,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItem,
  RadioGroup,
  BreadcrumbItem,
  Breadcrumb,
  DatePicker,
  Table,
  TableColumn,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Dialog
} from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(RadioGroup)
Vue.use(BreadcrumbItem)
Vue.use(Breadcrumb)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Scrollbar)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
