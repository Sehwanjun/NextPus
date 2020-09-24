import React from "react";
import PropTypes from "prop-types";
import { List, Button, Card } from "antd";
import { StopOutlined } from "@ant-design/icons";

const FollowList = ({ header, data }) => {
  /// //styled component //////
  // {{}} 이건 새로 스타일링 해줘야 할 것.
  // const StyledFollowList = styled(List)`
  // grid: style={{ marginBottom: 20 }}
  //     grid={{ gutter: 4, xs: 2, md: 3 }}
  // `;

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
          <Card actions={[<StopOutlined key="stop" />]}>
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
