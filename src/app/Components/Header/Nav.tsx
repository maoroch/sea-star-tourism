import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
        Home
        </Link>
      </li>
      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
        About Us
        </Link>
      </li>

            <li>
        <Link href="/tour" onClick={() => setMobileToggle(false)}>
       Tours
        </Link>
      </li>

{/*
      <li className="menu-item-has-children">
        <Link href="/destination" onClick={() => setMobileToggle(false)}>
         Направления
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/destination" onClick={() => setMobileToggle(false)}>
              Популярные направления
              </Link>
            </li>
            <li>
              <Link href="/destination/destination-details" onClick={() => setMobileToggle(false)}>
              Детали направлений
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

            <li className="menu-item-has-children">
        <Link href="/tour" onClick={() => setMobileToggle(false)}>
        Туры
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/tour" onClick={() => setMobileToggle(false)}>
              Туры
              </Link>
            </li>          
            <li>
              <Link href="/tour/tour-details" onClick={() => setMobileToggle(false)}>
              Детали тура
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> 
*/}


      
{ 
  /* 
        <li className="menu-item-has-children">
        <Link href="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/activities" onClick={() => setMobileToggle(false)}>
              Activities
              </Link>
            </li> 
            <li>
              <Link href="/activities/activities-details" onClick={() => setMobileToggle(false)}>
              Activities Details
              </Link>
            </li>             
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>            
            <li>
              <Link href="/team/team-details" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>                                      
          </ul>
        </DropDown>
      </li>        

      <li className="menu-item-has-children">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Блог
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Блог
              </Link>
            </li>
            <li>
              <Link href="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Блог
              </Link>
            </li>                         
            <li>
              <Link
                href="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Контакты
        </Link>
      </li>
  */
}
    </ul>
  );
}
