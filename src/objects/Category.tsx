import LinkExtra from './LinkExtra'
import Video from './Video'

export default interface Category {
    titulo: string,
    cor: string,
    link_extra: LinkExtra,
    videos: Video []
}

