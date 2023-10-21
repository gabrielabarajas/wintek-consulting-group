import React from 'react'
import style from './BlogSection.module.css'
import Link from 'next/link'
import Image from 'next/image'

const BlogSection = ({articles}) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0)
     }
console.log(articles);

    return(

        <section id="blogSec" className="wpo-blog-section section-padding">
            <div className="container">
            <p className={style.title}>Compartimos conocimiento</p>
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <p className={style.text}>Blog</p>
                            <p className={style.smallText}>Nuestros artículos</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                         {articles.map((blog, index) => (
                            <div className="col col-lg-4 col-md-6 col-12"  key={index}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img" style={{position:"relative","aspect-ratio": "16/9"}}>
                                        <Image style={{objectFit: 'cover'}}fill src={blog.imageUrl} alt="image from blog"/>
                                    </div>
                                    <div className="wpo-blog-content">
                                        <div className="wpo-blog-content-top">
                                            <div className="wpo-blog-thumb">
                                                <span>{blog.category}</span>
                                            </div>
                                            <h2>{blog.title}</h2>
                                        </div>
                                        <div className="wpo-blog-content-btm">
                                            <div className="wpo-blog-content-btm-left">
                                                <div className="wpo-blog-content-btm-left-text">
                                                    <h4>{blog.author}</h4>
                                                    <span>{blog.authorTitle}</span>
                                                </div>
                                            </div>
                                            <div className="wpo-blog-content-btm-right">
                                                <span>{blog.create_at}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;