import React,{Component} from 'react'
import {  Table } from 'semantic-ui-react';
import details from './data.json'

class TableExample extends Component {
  render(){
    return(
      <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Username</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Age</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
     {details.map(detail =>{
       return (
         <Table.Row key={detail.age}>
      <Table.Cell>{detail.username}</Table.Cell>
      <Table.Cell>{detail.email}</Table.Cell>
      <Table.Cell>{detail.age}</Table.Cell>
         </Table.Row>
       )
     })}
    </Table.Body>

  </Table>
    )
  }
  }


export default TableExample
