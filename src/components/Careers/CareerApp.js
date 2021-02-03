import React, { useState, useEffect, StyleSheet } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import './CareerApp.css'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function CareerApp() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    setJobs(newJobs)
    setLoading(false)
  }
  useEffect(() => {
    document.body.className = 'careeer-body';
    document.body.h2 = 'h2-career';
    document.body.section = 'section-career';
    fetchJobs()
  }, [])
  if (loading) {
    return (
      <section className='section-career loading'>
        <h1>Loading...</h1>
      </section>
    )
  }
  const { company, dates, duties, title } = jobs[value]
  return (
    <section className='section-career'>
      <div className='title'>
        <h2>Expierence</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container-career'>
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
      <button type='button' className='btnCa'>
        more info
      </button>
    </section>
  )
}

// const styles = StyleSheet.create({
//   section: {
//     width:"90vw",
//     margin: "5rem auto",
//     maxWidth: "1170px",
//     textAlign: "center",
//   },
//   title: {
//     marginBottom: "4rem",
//     textAlign: "center"
//   },
//   h2career: {
//     letterSpacing: "0.1rem",
//     textTransform: "capitalize",
//     lineHeight: "1.25",
//     marginBottom: "0.75rem",
//     fontSize: "2rem"
//   },
//   underline: {
//     width: "5rem",
//     height: "0.25rem",
//     marginBottom: "1.25rem",
//     background: "#2caeba",
//     marginLeft: "auto",
//     marginRight: "auto",
//   },
//   jobsCenter: {
//     width: "80vw",
//     margin: "0 auto",
//     maxWidth: "1170px",
//     display: "grid",
//     gridTemplateColumns: "200px 1fr",
//     columnGap: "4rem",
//   },
//   btnContainer: {
//     flexDirection: "row",
//     justifyContent: "centre",
//     display: "flex",
//     marginBottom: "4rem",
//     flexWrap: "wrap"
//   }
// });

export default CareerApp
