import { useEffect, useState } from 'react'
import { SkillsProps } from './skills.types'

const Skills = (props : SkillsProps) => {
  const [isLogging, setIsLogging] = useState(false)
    const { skills } = props

    useEffect(() => {
      setTimeout(() => {
        setIsLogging(true)
      },1001)
    }, [])
  return (
    <>
    <ul>
        {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
        ))}
    </ul>
    {
      isLogging ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLogging(true)}>Login</button>
      )
    }
    </>
  )
}

export default Skills