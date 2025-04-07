import React, { useState } from 'react'
import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import { recentlyViewedAtom } from '../atoms/recentlyViewedAtom'
import { navigateToRecipe } from '../utils/helpers'
import RecipeModal from './RecipeModal'
import '../styles/RecipeCardWithDetail.css'

const RecipeCardWithDetail = ({ recipe }) => {
    const navigate = useNavigate()
    const [recentlyViewed, setRecentlyViewed] = useAtom(recentlyViewedAtom)
    const [selectedRecipe, setSelectedRecipe] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [page, setPage] = useState(1)

    const handleMoreDetailsClick = (recipe) => {
        console.log('More details clicked for recipe:', recipe)
        setSelectedRecipe(recipe)
        setShowModal(true)
        setPage(1)
    }

    const closeModal = () => {
        setShowModal(false)
        setSelectedRecipe(null)
    }

    const handleCardClick = () => {
        setRecentlyViewed((prev) => {
            const updatedViewed = [recipe, ...prev.filter((item) => item.id !== recipe.id)].slice(0, 5)
            return updatedViewed
        })
        navigateToRecipe(navigate, recipe.id)
    }

    return (
        <>
         <div className="recipe-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            {/* Recipe Image */}
            <div className="recipe-card-image" onClick={() => navigateToRecipe(navigate, recipe.id)} style={{ cursor: 'pointer' }}>
                {recipe.thumbnail_url ? (
                    <img src={recipe.thumbnail_url} alt={recipe.name} />
                ) : (
                    <div className="recipe-card-no-image">No Image</div>
                )}
            </div>

            {/* Recipe Name */}
            <h3 className="recipe-card-title"  onClick={() => navigateToRecipe(recipe.id)} style={{ cursor: 'pointer' }}>{recipe.name}</h3>

            {/* Total Time */}
            <p className="recipe-card-time">
                {recipe.total_time_minutes ? `${recipe.total_time_minutes} mins` : 'N/A'}
            </p>

            {/* Info Icon */}
            <div
                className="recipe-card-info-icon"
                onClick={(e) => {
                    e.stopPropagation()
                    handleMoreDetailsClick(recipe)
                }}
                style={{ cursor: 'pointer' }}
            >
                <i className="bi bi-info-circle" style={{ fontSize: '20px', color: '#007bff' }}></i>
            </div>
            </div>

            {/* Bootstrap Modal */}
            {showModal && (
                <RecipeModal
                    selectedRecipe={selectedRecipe}
                    page={page}
                    setPage={setPage}
                    closeModal={closeModal}
                />
            )}
        </>
    )
}

export default RecipeCardWithDetail