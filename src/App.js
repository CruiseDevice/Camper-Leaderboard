import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './App.css';

var url  = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
console.log(url);

var logo={
  fire_svg: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ2NXB4IiBoZWlnaHQ9IjMwNnB4IiB2aWV3Qm94PSIwIDAgNDY1IDMwNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy43LjIgKDI4Mjc2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjczNDM3NSwxNDcuMDA3NTUzIEMwLjczNDM3NSw5OS45Mzc2Nzk1IDE3LjQyNzY3ODEsNTcuODIyNTI5MyA1MS4wNjcyMTMxLDIwLjQxNDM2NjUgQzYzLjIwNzc5NzEsNy4wMzY2MTI5NyA3My4zMjQ5NTA1LDAuMSA4MC4xNTQwMjkxLDAuMSBDODIuNDMwMzg4NiwwLjEgODQuNzA2NzQ4MSwwLjg0MzIwODUzMiA4Ni45ODMxMDc2LDIuMzI5NjI1NiBDODguNTAwNjgwNiwzLjgxNjA0MjY2IDkwLjAxODI1MzYsNi4wNDU2NjgyNiA5MC4wMTgyNTM2LDguMjc1MjkzODUgQzkwLjAxODI1MzYsMTEuOTkxMzM2NSA4NS40NjU1MzQ2LDE3LjE5Mzc5NjIgNzcuMTE4ODgzMSwyNS42MTY4MjYzIEM0MS45NjE3NzUsNTguNTY1NzM3OCAyNC4yNTY3NTY2LDk4Ljk0NjczNDggMjQuMjU2NzU2NiwxNDcuNzUwNzYyIEMyNC4yNTY3NTY2LDIwMS43NTcyNDggNDIuNzIwNTYxNSwyNDUuMTExMDc5IDc4LjYzNjQ1NjEsMjc4LjgwMzE5OSBDODYuMjI0MzIxMSwyODUuNDkyMDc2IDg5LjI1OTQ2NzEsMjkwLjY5NDUzNiA4OS4yNTk0NjcxLDI5NS4xNTM3ODcgQzg5LjI1OTQ2NzEsMjk3LjM4MzQxMyA4Ny43NDE4OTQxLDI5OS42MTMwMzggODYuMjI0MzIxMSwzMDEuODQyNjY0IEM4NC43MDY3NDgxLDMwMy4zMjkwODEgODEuNjcxNjAyMSwzMDQuODE1NDk4IDc5LjM5NTI0MjYsMzA0LjgxNTQ5OCBDNzEuMDQ4NTkxLDMwNC44MTU0OTggNTkuNDEzODY0NiwyOTUuMTUzNzg3IDQ0LjIzODEzNDYsMjc2LjMyNTgzOCBDMTQuNjQ1NDYwOSwyNDAuNjUxODI4IDAuNzM0Mzc1LDE5OC4wNDEyMDYgMC43MzQzNzUsMTQ3LjAwNzU1MyBMMC43MzQzNzUsMTQ3LjAwNzU1MyBMMC43MzQzNzUsMTQ3LjAwNzU1MyBaIiBpZD0icGF0aDI5Ij48L3BhdGg+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00NjQuMSwxNTguODk4ODkgQzQ2NC4xLDIwNS45Njg3NjMgNDQ3LjQwNjY5NywyNDguMDgzOTE0IDQxMy43NjcxNjIsMjg1LjQ5MjA3NiBDNDAxLjYyNjU3OCwyOTguODY5ODMgMzkxLjUwOTQyNCwzMDUuODA2NDQzIDM4NC42ODAzNDYsMzA1LjgwNjQ0MyBDMzgyLjQwMzk4NiwzMDUuODA2NDQzIDM4MC4xMjc2MjcsMzA1LjA2MzIzNCAzNzcuODUxMjY3LDMwMy41NzY4MTcgQzM3Ni4zMzM2OTQsMzAyLjA5MDQgMzc0LjgxNjEyMSwyOTkuMTE3NTY2IDM3NC44MTYxMjEsMjk2Ljg4Nzk0IEMzNzQuODE2MTIxLDI5My4xNzE4OTggMzc5LjM2ODg0LDI4Ny45Njk0MzggMzg3LjcxNTQ5MiwyODAuNTM3MzUzIEM0MjIuODcyNiwyNDcuNTg4NDQxIDQ0MC41Nzc2MTgsMjA3LjIwNzQ0NCA0NDAuNTc3NjE4LDE1OC40MDM0MTcgQzQ0MC41Nzc2MTgsMTA0LjM5NjkzMSA0MjIuMTEzODEzLDYxLjA0MzA5OTYgMzg2LjE5NzkxOSwyNy4zNTA5Nzk1IEMzNzguNjEwMDU0LDIwLjY2MjEwMjcgMzc1LjU3NDkwOCwxNS40NTk2NDMgMzc1LjU3NDkwOCwxMS4wMDAzOTE4IEMzNzUuNTc0OTA4LDguNzcwNzY2MjEgMzc3LjA5MjQ4MSw2LjU0MTE0MDYxIDM3OC42MTAwNTQsNC4zMTE1MTUwMSBDMzgwLjEyNzYyNywyLjgyNTA5Nzk1IDM4My4xNjI3NzMsMS4zMzg2ODA4OSAzODUuNDM5MTMyLDEuMzM4NjgwODkgQzM5My4wMjY5OTcsMS4zMzg2ODA4OSA0MDUuNDIwNTEsMTEuMDAwMzkxOCA0MjAuNTk2MjQsMjkuODI4MzQxMyBDNDQ4LjY3MTM0MSw2NS41MDIzNTA4IDQ2NC4xLDEwOC4xMTI5NzMgNDY0LjEsMTU4Ljg5ODg5IEw0NjQuMSwxNTguODk4ODkgTDQ2NC4xLDE1OC44OTg4OSBaIiBpZD0icGF0aDMxIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJnMzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNy41ODAyMzksIDI2NS43Mjk3NDIpIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMzEuMDE4MTQ5LDI5Ljc1Njc1NDQgTDE4Ljk4Nzc5MywyOS43NTY3NTQ0IEMxMS4zOTI2NzU4LDI5Ljc1Njc1NDQgNS42OTYzMzc5MSwyNC4xNzczNjMgNS42OTYzMzc5MSwxNi43MzgxNzQ0IEM1LjY5NjMzNzkxLDkuMjk4OTg1NzYgMTEuMzkyNjc1OCwzLjcxOTU5NDMgMTguOTg3NzkzLDMuNzE5NTk0MyBMMjMxLjAxODE0OSwzLjcxOTU5NDMgQzIzOC42MTMyNjYsMy43MTk1OTQzIDI0NC4zMDk2MDQsOS4yOTg5ODU3NiAyNDQuMzA5NjA0LDE2LjczODE3NDQgQzI0Mi40MTA4MjQsMjQuMTc3MzYzIDIzOC42MTMyNjYsMjkuNzU2NzU0NCAyMzEuMDE4MTQ5LDI5Ljc1Njc1NDQgTDIzMS4wMTgxNDksMjkuNzU2NzU0NCBaIiBpZD0icGF0aDM3Ij48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZD0iTTE4Ny4zOTU4NTUsMjUuNjE2ODI2MyBDMTg3LjM5NTg1NSwyNS42MTY4MjYzIDIwNS4xMDA4NzMsMzcuNTA4MTYyOCAyMDUuMTAwODczLDU5LjMwODk0NjQgQzIwNS4xMDA4NzMsOTYuNzE3MTA5MiAxNTIuOTk3NTMzLDEzNy44NDEzMTUgMTUyLjk5NzUzMywxNzYuNzM1ODk0IEMxNTIuOTk3NTMzLDIxOC42MDMzMDggMTg1Ljg3ODI4MiwyNDUuNjA2NTUyIDIxNy4yNDE0NTcsMjUzLjc4MTg0NiBDMjIxLjc5NDE3NiwyNTQuNTI1MDU0IDIyMy4zMTE3NDksMjUwLjA2NTgwMyAyMTguMDAwMjQ0LDI0OC41NzkzODYgQzIwNS4xMDA4NzMsMjQ1LjYwNjU1MiAxOTEuMTg5Nzg3LDIyOS4wMDgyMjggMTkxLjE4OTc4NywyMDMuNzM5MTM4IEMxOTEuMTg5Nzg3LDE3OS43MDg3MjkgMjE0Ljk2NTA5OCwxNzAuNzkwMjI2IDIyNC4wNzA1MzYsMTU5LjY0MjA5OCBDMjMzLjkzNDc2MSwxNDcuNzUwNzYyIDIzMS42NTg0MDEsMTMyLjYzODg1NSAyMjUuNTg4MTA5LDEyOC4xNzk2MDQgQzIxOS41MTc4MTcsMTIzLjcyMDM1MiAyMjQuMDcwNTM2LDExNy43NzQ2ODQgMjMzLjkzNDc2MSwxMjUuMjA2NzcgQzI0My43OTg5ODUsMTMxLjg5NTY0NiAyNTIuMzk4NTY1LDE0NS41MjExMzYgMjQ5LjExMDQ5MSwxNTcuNDEyNDczIEMyNDUuMzE2NTU4LDE3My4wMTk4NTIgMjUwLjYyODA2NCwxODIuMTg2MDkgMjU4Ljk3NDcxNSwxODMuNjcyNTA3IEMyNjcuMzIxMzY3LDE4NS4xNTg5MjQgMjc2LjY3OTczNCwxODAuNjk5NjczIDI3NS42NjgwMTgsMTczLjI2NzU4OCBDMjc0LjY1NjMwMywxNjUuODM1NTAzIDI3MC4zNTY1MTMsMTU3LjY2MDIwOSAyNzIuNjMyODcyLDE1Ny42NjAyMDkgQzI3OC43MDMxNjQsMTU3LjY2MDIwOSAyOTEuMDk2Njc3LDE3MS43ODExNzEgMjkxLjA5NjY3NywxOTUuMDY4MzcyIEMyOTEuMDk2Njc3LDIxOC4zNTU1NzIgMjcxLjg3NDA4NiwyMzMuOTYyOTUxIDI2NS44MDM3OTQsMjM5LjkwODYyIEMyNjIuMDA5ODYxLDI0My42MjQ2NjIgMjY2LjU2MjU4LDI0OC4wODM5MTQgMjcxLjg3NDA4NiwyNDUuODU0Mjg4IEMyNzQuMTUwNDQ1LDI0NS4xMTEwNzkgMjc5LjQ2MTk1MSwyNDIuMTM4MjQ1IDI4Mi40OTcwOTcsMjM5LjkwODYyIEMyOTcuNjcyODI3LDIyOS41MDM3IDMyMS40NDgxMzcsMjA3LjcwMjkxNyAzMjEuNDQ4MTM3LDE2OC4wNjUxMjggQzMyMS40NDgxMzcsMTI2LjE5NzcxNCAzMDUuNTEzNjIxLDEwNy4zNjk3NjUgMjg4LjU2NzM4OSw5MS43NjIzODU2IEMyNzEuODc0MDg2LDc2LjE1NTAwNjQgMjY3LjgyNzIyNCw3OS44NzEwNDkxIDI3Mi42MzI4NzIsODguMDQ2MzQzIEMyODYuMjkxMDI5LDExMS4zMzM1NDQgMjc3Ljk0NDM3OCwxMTkuNTA4ODM3IDI2OC4wODAxNTMsMTE5LjUwODgzNyBDMjU1LjkzOTU2OSwxMTkuNTA4ODM3IDI1NS45Mzk1NjksOTMuMjQ4ODAyNyAyNTAuMzc1MTM1LDczLjE4MjE3MjMgQzI0MC41MTA5MSwyOC4zNDE5MjQyIDE5OC4yNzE3OTUsMjAuNjYyMTAyNyAxOTAuNjgzOTMsMTkuOTE4ODk0MiBDMTg1LjExOTQ5NSwxNy40NDE1MzI0IDE3OC4wMzc0ODgsMjEuOTAwNzgzNiAxODcuMzk1ODU1LDI1LjYxNjgyNjMgTDE4Ny4zOTU4NTUsMjUuNjE2ODI2MyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",
  height:13,
  width:25,
  alt:"FCC_logo",
  display: 'inline-block'
}
var profile_pic = {
  height:100,
  width:100,
  user_profile:'https://www.freecodecamp.com/'
}
const list = [
  {
    alltime:4457,
    img:"https://avatars1.githubusercontent.com/u/11348778?v=3",
    lastupdate:"2017-03-17T17:49:57.266Z",
    recent:570,
    username:"Manish-Giri"
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list,
      result:null
    }
    this.fetchData = this.fetchData.bind(this);
    this.result_function = this.result_function.bind(this);

  }
  result_function(result){
    this.setState({result});
    this.numbers(result)
    console.log(result);
  }
  numbers(result){
    for(var i = 1; i < result.length+1; i++){
      console.log(i);
    }
  }
  fetchData(url){
  fetch(url)
  .then(response => response.json())
  .then(result => this.result_function(result));

   console.log('fetch data!');
 };
  componentDidMount(){
    this.fetchData(url);
  }
  render() {
    const {result} = this.state;
    if(!result){
      return null;
    }
    return (
      <div className="App">
        <div className="App-header">
          freeCodeCamp <img src={logo.fire_svg} height={logo.height} width={logo.width} alt={logo.alt} />
        </div>
        <div className="leaderboard_title">
          Leaderboard
        </div>
        {
          result
          ? <Table
            list={result}
            />
          :null
        }
      </div>
    );
  }
}

const Table = ({list}) =>
      <div className = "leaderboard row">
        <div className  = "col-md-12">
          <table className = "table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th className = "col-md-4">Camper Name</th>
                <th>Points in Last 30 days</th>
                <th>All time Points</th>
              </tr>
            </thead>
            {list.map(item=>
              <tbody>
                <tr>
                  <td>{}</td>
                  <td><a href = {profile_pic.user_profile + item.username}><img className = "user_profile_pic" src = {item.img} alt="" height={profile_pic.height} width={profile_pic.width}></img></a><a href = {profile_pic.user_profile + item.username}>{item.username}</a></td>
                  <td>{item.recent}</td>
                  <td>{item.alltime}</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
    </div>

export default App;
