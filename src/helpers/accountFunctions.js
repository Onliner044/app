import { deleteCookie } from './cookiesFunctions';
import { logOutXMLHTTPRequest } from './requests';

export const logOut = () => {
  logOutXMLHTTPRequest().then(
    () => {
      deleteCookie('Authorization');
      document.location.reload();
    } 
  ).catch(
    (value) => {  
      alert('Ошибка!');
      console.log(value.status, value.responseText);
    }
  )
}