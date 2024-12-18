import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import AudioWidget from '../AudioWidget'
import './style.scss'

class Post extends React.Component {
    render() {
        const {
            title, date, category, description, attachments, audio
        } = this.props.data.node.frontmatter
        const { slug, categorySlug } = this.props.data.node.fields

        console.log('Post Props:', {
            title,
            audio: this.props.audio,
            frontmatterAudio: audio,
            attachments
        });

        return (
            <div>
                <div className="post">
                    <div className="post__meta">
                        <time className="post__meta-time" dateTime={moment(date).format('MMMM D, YYYY')}>
                            {moment(date).format('MMMM YYYY')}
                        </time>
                        <span className="post__meta-divider" />
                        <span className="post__meta-category" key={categorySlug}>
                            <Link to={categorySlug} className="post__meta-category-link">
                                {category}
                            </Link>
                        </span>
                    </div>
                    <div className="post__hover">
                        <h2 className="post__title">
                            <Link className="post__title-link" to={slug}>
                                {title}
                            </Link>
                        </h2>
                        <p className="post__description">{description}</p>
                    </div>
                </div>
                <div className="breaker" />
                <AudioWidget
                    audio={this.props.audio || audio}
                    audioFile={attachments && attachments[0] ? attachments[0].publicURL : ''}
                />
            </div>
        )
    }
}

export default Post 