import React, { type FC } from "react";
import { Link } from "gatsby";

interface Props {
    post: {
        html: string;
        fields: {
            tagSlugs: string[];
        };
        frontmatter: {
            tags: string[];
            title: string;
            date: string;
            audio?: boolean;
            attachments?: Array<{
                publicURL: string;
            }>;
        };
    };
}

const Post: FC<Props> = ({ post }) => {
    const { html } = post;
    const { tags, title, date, audio, attachments } = post.frontmatter;
    const { tagSlugs } = post.fields;

    return (
        <div className="post">
            <Link className="post__home-button" to="/">
                All Articles
            </Link>

            <div className="post__content">
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>

            {audio && attachments && attachments[0] && (
                <div className="post__audio">
                    <audio controls>
                        <source src={attachments[0].publicURL} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}

            <div className="post__footer">
                <div className="post__meta">
                    <time dateTime={date}>{date}</time>
                </div>
                <div className="post__tags">
                    {tags && tags.map((tag, i) => (
                        <Link key={tag} to={tagSlugs[i]} className="post__tag">
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Post; 