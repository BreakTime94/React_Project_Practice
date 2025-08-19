import React, {useState} from "react";

function Nav(props) {
  const list = [];
  const [idList, setIdList] = useState([]);

  for(let i = 0; i < props.nav.length; i ++) {
    let t = props.nav[i];
    const clicker = (e) => {
      e.preventDefault();
      if(idList.includes(t.id)){
        setIdList(idList.filter(id => id !== t.id));
        return;
      }
      setIdList([...idList, t.id])
    }
    list.push(<li key={t.id}><a id={t.id} href={"/"} onClick={(event) => {
      event.preventDefault();
      props.onChangeMode(event.target.id/1); //Number(event.target.id)
      //clicker(event);
    }}>{t.title}</a></li>)
  }


  return (
      <div> {/* NAV */}
        <ol className={"ol"}>
          {/*{props.nav.map((i) =>*/}
          {/*<li key={i.id}><a href={"/"}>{i.title}</a></li>*/}
          {/*)}*/}
          {list}
        </ol>
      </div>
  );
}
export default Nav