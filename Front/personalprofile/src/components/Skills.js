import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import skills from '../data/skills.json';
import {stacksButtons} from '../data/stacks-types';

function Skills() {
  const [activeSkills,setActiveSkills] = useState(skills);

  const filterStack = (stack) => {
    if (stack === 'All') {
      setActiveSkills(skills);
    } else {
      const newSkills = skills.filter((skill) => skill.stack == stack);
      setActiveSkills(newSkills);
    }
  }

  return (
     <section className='section'>
       {
         stacksButtons.map((stack) => {
           return <button 
                    className='job-btn'
                    onClick={() => filterStack(stack.text)}>
                      {stack.text}
                  </button>
         })
       }
      <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow className='column-index'>
            <TableCell className='column-index'>Technology</TableCell>
            <TableCell>Stack</TableCell>
            <TableCell>First Experience</TableCell>
            <TableCell>Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activeSkills.map((skill) => (
            <TableRow key={skill.name}>
              <TableCell component="th" scope="row">
                {skill.name}
              </TableCell>
              <TableCell>{skill.stack}</TableCell>
              <TableCell>{skill.firstExperience}</TableCell>
              <TableCell>{skill.level}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </section>
  )
}

export default Skills
