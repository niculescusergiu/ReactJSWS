import React from 'react'
import styles from '../components/styles/AdCard.module.css'
import AdCards from './AdCards'
const Ads = () => {
  return (
    <div className={styles.container} >
      <AdCards />
    </div>
  )
}

export default Ads