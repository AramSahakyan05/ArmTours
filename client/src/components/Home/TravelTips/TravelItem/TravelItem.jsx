import './TravelItem.scss';

export const TravelItem = ({id, img, type, title, description, date, author, comments}) => {
  return (
    <div className="travel-item">
        {/* Travel Tip Image */}
      <div className="travel-item-image">
        <img src={img} alt="Travel Image" />
      </div>
      {/* Travel Tip Info */}
      <div className="travel-item-info">
        <p className='type'>
          <span>{type}</span>
        </p>
        <h2 className="title">{title}</h2>
        <p className='description'>{description}</p>
        <div className='date-author-comments'>
          <span className='date'>
            <span>{date.icon}</span>
            <span>{date.month}</span>
            <span>{date.day},</span>
            <span>{date.year}</span>
          </span>
          <span className='author'>
            {author.icon}{author.name}
          </span>
          <span className="comments">
            {comments.icon}{comments.comment_array.length}
          </span>
        </div>
      </div>
    </div>
  )
}