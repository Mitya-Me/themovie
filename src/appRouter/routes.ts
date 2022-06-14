import { MembershipAndGiftsPage } from "../pages/membershipAndGifts"
import { FilmsAndEventsPage } from '../pages/filmsAndEvents'
import { VenueHirePage } from "../pages/venueHire"
import { ProfilePage } from '../pages/profile'
import { AdminPage } from '../pages/admin'
import { LoginPage } from '../pages/login'
import { FaqPage } from "../pages/faq"
import { MainPage } from "../pages/main"


export enum RoutesEnum {
    MEMBERSHIP_AND_GIFTS = '/membership_and_gifts',
    FILMS_AND_EVENTS = '/films_and_events',
    VENUE_HIRE = '/venue_hire',
    PROFILE = '/profile',
    LOGIN = '/login',
    ADMIN = '/admin',
    MAIN = '/',
    FAQ = '/faq',
}

export const Routes = [
    {path: RoutesEnum.MEMBERSHIP_AND_GIFTS, component: MembershipAndGiftsPage, exact: true},
    {path: RoutesEnum.FILMS_AND_EVENTS, component: FilmsAndEventsPage, exact: true},
    {path: RoutesEnum.VENUE_HIRE, component: VenueHirePage, exact: true},
    {path: RoutesEnum.PROFILE, component: ProfilePage, exact: true},
    {path: RoutesEnum.ADMIN, component: AdminPage, exact: true},
    {path: RoutesEnum.LOGIN, component: LoginPage, exact: true},
    {path: RoutesEnum.MAIN, component: MainPage, exact: true},
    {path: RoutesEnum.FAQ, component: FaqPage, exact: true},
]