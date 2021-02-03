import React, { useEffect } from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import '../Cocktails.css';

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext()
  useEffect(() => {
    document.body.section = 'section-cocktails';
    document.body.h2 = 'section-title';
  }, [])
  if (loading) {
    return <Loading/>
  }
  if (cocktails.length < 1) {
    return (
      <a className='section-title'>
        no cocktails matched your search criteria
      </a>
    )
  }
  return (
    <section className='section-cocktails'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
