import { HiHome } from "react-icons/hi2";
import { PiTelevisionFill } from "react-icons/pi";
import { MdMovieFilter } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

export const navigation = [
    {
        label : "acara TV",
        href : 'tv',
        icon : <PiTelevisionFill/>
    },
    {
        label : "Film",
        href : "movie",
        icon : <MdMovieFilter/>
    }
]

export const mobileNavigation = [
    {
        label : "Home",
        href : "/",
        icon : <HiHome/>
    },
    ...navigation,
    {
        label : "search",
        href : "/search",
        icon : <IoSearchOutline/>
    }
]