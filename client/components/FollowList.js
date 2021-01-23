import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { List, Button, Card } from "antd";
import { StopOutlined } from "@ant-design/icons";
import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from "reducers/user";
const FollowList = ({ header, data }) => {
  /// //styled component //////
  // {{}} 이건 새로 스타일링 해줘야 할 것.
  // const StyledFollowList = styled(List)`
  // grid: style={{ marginBottom: 20 }}
  //     grid={{ gutter: 4, xs: 2, md: 3 }}
  // `;
  const dispatch = useDispatch();
  const onCancel = (id) => () => { // 반복문내에서 data 넘길때 클로저 활용(item.id -> id)
    if (header === '팔로잉') { // 언팔로우=팔로잉 제거
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: id,
      })
    }
    // 팔로워를 차단
    dispatch({
      type: REMOVE_FOLLOWER_REQUEST,
      data: id,
    })
  }

  return (
    <List
      style={{ marginBottom: 20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      // 더보기
      loadMore={(
        <div style={{ textAlign: "center", margin: "10px 0" }}>
          <Button>더 보기</Button>
        </div>
      )}
      bordered
      // data: profile.js의 배열
      dataSource={data}
      // item: 위 data 배열의 요소 하나하나
      renderItem={item => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" onClick={onCancel(item.id)} />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;
