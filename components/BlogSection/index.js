import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlogSection = ({articles}) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="wpo-blog-section section-padding">
            <div className="container">
            <h1>Blog</h1>
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <h2>Compartimos conocimiento</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                         {articles.map((blog, index) => (
                            <div className="col col-lg-4 col-md-6 col-12"  key={index}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img src={blog.imageUrl} width={100} height={100}
                                        />
                                    </div>
                                    <div className="wpo-blog-content">
                                        <div className="wpo-blog-content-top">
                                            <h2><Link onClick={ClickHandler} href="/blog-single/[slug]" as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        </div>
                                        <div className="wpo-blog-content-btm">
                                            <div className="wpo-blog-content-btm-left">
                                                <div className="wpo-blog-content-btm-left-text">
                                                    <h4><Link onClick={ClickHandler} href="/blog-single/[slug]" as={`/blog-single/${blog.slug}`}>{blog.author}</Link></h4>
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