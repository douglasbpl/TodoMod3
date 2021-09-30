import React, { useState } from "react";
import Lixeira from "./img/lixeira.png";
import Adicionar from "./img/add.png";
import * as S from './style';

const ToDo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const add = (e) => {
    if (task.length > 0)
      setTaskList([...taskList, { task: task, key: Date.now() }]);
    setTask("");
    e.preventDefault();
  };

  const remove = (key) => {
    const newList = taskList.filter((item) => {
      return item.key !== key;
    });
    setTaskList(newList);
  };

  return (
    <S.BoxMother>
      <S.GlobalStyle />
      <S.Files onSubmit={add}>
        <S.BoxT>
          <S.Tittle>ToDo Basic</S.Tittle>
        </S.BoxT>
        <S.BoxIptBt>
          <S.Ipt
            value={task}
            onChange={handleChange}
            placeholder="Type Here"
            maxLength="40"
          />
          <S.AddBt onClick={add}>
            <S.AddImg src={Adicionar} alt="adicionar" />
          </S.AddBt>
        </S.BoxIptBt>
        <S.List>
          {taskList.map((item, index) => (
            <S.ListItem key={index}>
              {item.task}
              <S.Rmv
                onClick={() => {
                  remove(item.key);
                }}
              >
                <S.Dumpster src={Lixeira} alt="lixeirinha" />
              </S.Rmv>
            </S.ListItem>
          ))}
        </S.List>
      </S.Files>
    </S.BoxMother>
  );
};

export default ToDo;
