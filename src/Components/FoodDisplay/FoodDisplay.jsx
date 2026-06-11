import React, { useContext, useState, useEffect } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import SkeletonCard from '../SkeletonCard/SkeletonCard'

const FoodDisplay = ({ category }) => {

  const { food_list, searchQuery } = useContext(StoreContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const filtered = food_list.filter((item) => {
    const matchesCategory = category === 'All' || category === item.category
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {loading
          ? Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)
          : filtered.length > 0
            ? filtered.map((item, index) => (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              ))
            : <p className="no-results">No dishes found for "<strong>{searchQuery}</strong>"</p>
        }
      </div>
    </div>
  )
}

export default FoodDisplay