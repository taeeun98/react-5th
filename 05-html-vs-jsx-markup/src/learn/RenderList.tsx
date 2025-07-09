import { Fragment } from "react";

interface Props {
  reactLibrary: ReactLibrary;
  items: StatusMessageWithId[];
}

function RenderList({ reactLibrary, items }: Props) {
  //   console.log(reactLibrary);

  const demoList = [];
  for (const a of items) {
    demoList.push(<li key={a.id}>{a.message}</li>);
  }

  const _demoList = items.map(({ id, message }: StatusMessageWithId) => (
    <li key={id}>{message}</li>
  ));

  const renderDemoList = () =>
    items.map(({ id, message }) => <li key={id}>{message}</li>);

  const _renderDemoList = () => {
    return items.map(({ id, message }) => {
      return <li key={id}>{message}</li>;
    });
  };

  const renderDefinitionList = (data: ReactLibrary) => {
    const definitionItem = Object.entries(data).map(([key, value]) => (
      <Fragment key={key}>
        <dt>{key}</dt>
        <dd>{value}</dd>
      </Fragment>
    ));

    return <dl className="reactLibrary">{definitionItem}</dl>;
  };

  return (
    <>
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로
          렌더링 합니다
        </p>
        {renderDefinitionList(reactLibrary)}
      </dd>
      <dd>
        <ul>
          {
            /* 표현식을 사용한 리스트 렌더링 */
            items.map(({ id, message }: StatusMessageWithId) => (
              <li key={id}>{message}</li>
            ))
          }
        </ul>
        <hr />
        <ul>
          {
            /* for...of 사용한 리스트 렌더링 */
            demoList
          }
        </ul>
        <hr />
        <ul>
          {
            /* 배열의 메서드 사용한 리스트 렌더링 */
            _demoList
          }
        </ul>
        <hr />
        <ul>
          {
            /* 함수를 사용한 리스트 렌더링 */
            renderDemoList()
          }
        </ul>
      </dd>
      <dd>
        <p>상태 메세지(status message) 배열을 역순 정렬해서 렌더링합니다
            {
                /* 역순 리스트 렌더링 : 꼭 배열을 복사해서 사용하기. 원본 훼손 XXXXX */
                items.toReversed().map(({id, message}:StatusMessageWithId)=>(
                    <li key={id}>{message}</li>
                ))
            }
        </p>
      </dd>
    </>
  );
}

export default RenderList;
