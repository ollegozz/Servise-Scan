import React from 'react'
import css from './pageSearch.module.css'
import document from '../../image/icon/document.svg'
import folders from '../../image/icon/folders.svg'
import rocket from '../../image/img/rocket.svg'
import Search from './search'

export default function PageSearch() {
    return (
        <main className={css.body}>
            
            <div className={css.content}>
                <div className={css.contentLeft}>
                    <div className={css.titleCont}>
                        <div className={css.TitleText}>
                            <h1 className={css.title}>
                                Найдите необходимые данные в пару кликов.
                            </h1>
                        </div>
                        <div className={css.subTitle}>
                            Задайте параметры поиска. <br /> Чем больше заполните, тем точнее поиск
                        </div>
                    </div>
                    
                    <div className={css.formSearch}>
                        <Search />
                    </div>
                </div>

                <div className={css.contentRight}>
                    <div className={css.titleImgDock}>
                        <img src={document} alt="document" />
                    </div>
                    <div className={css.titleImgFolder}>
                        <img src={folders} alt="folders" />
                    </div>
                    <div className={css.formRocket}>
                        <img src={rocket} alt="rocket" />
                    </div>
                </div>
            </div>
        </main>
    )
}
