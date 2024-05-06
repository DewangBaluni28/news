import '../index.css';
import NewsItems from './NewsItems'

const NewsGrid = ({items}) => {
  return (
    <div className='news-grid'>
      {items.map((item, i) => (
        <NewsItems key={i} item={item} />
      ))}
    </div>
  )
}

export default NewsGrid
