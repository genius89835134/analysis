import React, { Component } from 'react';
import { Button, Descriptions, Divider, PageHeader, Table } from 'antd';
import HighCharts from './highCharts';
import _ from 'lodash';
import moment from 'moment';
export default class Data extends Component {
  state = {
    dataset: true,
    analysis: false,
    loading: false,
    data: {},
  }

  componentDidMount() {
    this.setState({ loading: true });
    (async () => {
      const path = `http://211.75.191.19:3006/file/${this.props.match.params.id}`;
      const res = await fetch(path.replace(/\"/g, ''));
      const data = await res.text();
      this.setState({ data: JSON.parse(data), loading: false })
    })();
  }


  renderTable = () => {
    const { data, loading } = this.state;
    const dataSource = [];
    _.map(data.datasets, (item, index) => {
      dataSource.push({
        id: index - 1,
        Fp1_Delta: item.Fp1_Delta,
        Fp1_Theta: item.Fp1_Theta,
        Fp1_LowAlpha: item.Fp1_LowAlpha,
        Fp1_HighAlpha: item.Fp1_HighAlpha,
        Fp1_LowBeta: item.Fp1_LowBeta,
        Fp1_HighBeta: item.Fp1_HighBeta,
        Fp1_LowGamma: item.Fp1_LowGamma,
        Fp1_HighGamma: item.Fp1_HighGamma,
        Fp2_Delta: item.Fp2_Delta,
        Fp2_Theta: item.Fp2_Theta,
        Fp2_LowAlpha: item.Fp2_LowAlpha,
        Fp2_HighAlpha: item.Fp2_HighAlpha,
        Fp2_LowBeta: item.Fp2_LowBeta,
        Fp2_HighBeta: item.Fp2_HighBeta,
        Fp2_LowGamma: item.Fp2_LowGamma,
        Fp2_HighGamma: item.Fp2_HighGamma,
        Fz_Delta: item.Fz_Delta,
        Fz_Theta: item.Fz_Theta,
        Fz_LowAlpha: item.Fz_LowAlpha,
        Fz_HighAlpha: item.Fz_HighAlpha,
        Fz_LowBeta: item.Fz_LowBeta,
        Fz_HighBeta: item.Fz_HighBeta,
        Fz_LowGamma: item.Fz_LowGamma,
        Fz_HighGamma: item.Fz_HighGamma,
        C3_Delta: item.C3_Delta,
        C3_Theta: item.C3_Theta,
        C3_LowAlpha: item.C3_LowAlpha,
        C3_HighAlpha: item.C3_HighAlpha,
        C3_LowBeta: item.C3_LowBeta,
        C3_HighBeta: item.C3_HighBeta,
        C3_LowGamma: item.C3_LowGamma,
        C3_HighGamma: item.C3_HighGamma,
        C4_Delta: item.C4_Delta,
        C4_Theta: item.C4_Theta,
        C4_LowAlpha: item.C4_LowAlpha,
        C4_HighAlpha: item.C4_HighAlpha,
        C4_LowBeta: item.C4_LowBeta,
        C4_HighBeta: item.C4_HighBeta,
        C4_LowGamma: item.C4_LowGamma,
        C4_HighGamma: item.C4_HighGamma,
        A1_Delta: item.A1_Delta,
        A1_Theta: item.A1_Theta,
        A1_LowAlpha: item.A1_LowAlpha,
        A1_HighAlpha: item.A1_HighAlpha,
        A1_LowBeta: item.A1_LowBeta,
        A1_HighBeta: item.A1_HighBeta,
        A1_LowGamma: item.A1_LowGamma,
        A1_HighGamma: item.A1_HighGamma,
        Pz_Delta: item.Pz_Delta,
        Pz_Theta: item.Pz_Theta,
        Pz_LowAlpha: item.Pz_LowAlpha,
        Pz_HighAlpha: item.Pz_HighAlpha,
        Pz_LowBeta: item.Pz_LowBeta,
        Pz_HighBeta: item.Pz_HighBeta,
        Pz_LowGamma: item.Pz_LowGamma,
        Pz_HighGamma: item.Pz_HighGamma,
        A2_Delta: item.A2_Delta,
        A2_Theta: item.A2_Theta,
        A2_LowAlpha: item.A2_LowAlpha,
        A2_HighAlpha: item.A2_HighAlpha,
        A2_LowBeta: item.A2_LowBeta,
        A2_HighBeta: item.A2_HighBeta,
        A2_LowGamma: item.A2_LowGamma,
        A2_HighGamma: item.A2_HighGamma,
        O1_Delta: item.O1_Delta,
        O1_Theta: item.O1_Theta,
        O1_LowAlpha: item.O1_LowAlpha,
        O1_HighAlpha: item.O1_HighAlpha,
        O1_LowBeta: item.O1_LowBeta,
        O1_HighBeta: item.O1_HighBeta,
        O1_LowGamma: item.O1_LowGamma,
        O1_HighGamma: item.O1_HighGamma,
        O2_Delta: item.O2_Delta,
        O2_Theta: item.O2_Theta,
        O2_LowAlpha: item.O2_LowAlpha,
        O2_HighAlpha: item.O2_HighAlpha,
        O2_LowBeta: item.O2_LowBeta,
        O2_HighBeta: item.O2_HighBeta,
        O2_LowGamma: item.O2_LowGamma,
        O2_HighGamma: item.O2_HighGamma,
        firstTree: item.firstTree,
        secondTree: item.secondTree,
      });
    })
    const columns = [
      {
        title: 'Fp1_Delta',
        dataIndex: 'Fp1_Delta',
        key: 'Fp1_Delta',
        fixed: 'left',
      },
      {
        title: 'Fp1_Theta',
        dataIndex: 'Fp1_Theta',
        key: 'Fp1_Theta',
      },
      {
        title: 'Fp1_LowAlpha',
        dataIndex: 'Fp1_LowAlpha',
        key: 'Fp1_LowAlpha',
      },
      {
        title: 'Fp1_HighAlpha',
        dataIndex: 'Fp1_HighAlpha',
        key: 'Fp1_HighAlpha',
      },
      {
        title: 'Fp1_LowBeta',
        dataIndex: 'Fp1_LowBeta',
        key: 'Fp1_LowBeta',
      },
      {
        title: 'Fp1_HighBeta',
        dataIndex: 'Fp1_HighBeta',
        key: 'Fp1_HighBeta',
      },
      {
        title: 'Fp1_LowGamma',
        dataIndex: 'Fp1_LowGamma',
        key: 'Fp1_LowGamma',
      },
      {
        title: 'Fp1_HighGamma',
        dataIndex: 'Fp1_HighGamma',
        key: 'Fp1_HighGamma',
      },
      {
        title: 'Fp2_Delta',
        dataIndex: 'Fp2_Delta',
        key: 'Fp2_Delta',
      },
      {
        title: 'Fp2_Theta',
        dataIndex: 'Fp2_Theta',
        key: 'Fp2_Theta',
      },
      {
        title: 'Fp2_LowAlpha',
        dataIndex: 'Fp2_LowAlpha',
        key: 'Fp2_LowAlpha',
      },
      {
        title: 'Fp2_HighAlpha',
        dataIndex: 'Fp2_HighAlpha',
        key: 'Fp2_HighAlpha',
      },
      {
        title: 'Fp2_LowBeta',
        dataIndex: 'Fp2_LowBeta',
        key: 'Fp2_LowBeta',
      },
      {
        title: 'Fp2_HighBeta',
        dataIndex: 'Fp2_HighBeta',
        key: 'Fp2_HighBeta',
      },
      {
        title: 'Fp2_LowGamma',
        dataIndex: 'Fp2_LowGamma',
        key: 'Fp2_LowGamma',
      },
      {
        title: 'Fp2_HighGamma',
        dataIndex: 'Fp2_HighGamma',
        key: 'Fp2_HighGamma',
      },
      {
        title: 'Fz_Delta',
        dataIndex: 'Fz_Delta',
        key: 'Fz_Delta',
      },
      {
        title: 'Fz_Theta',
        dataIndex: 'Fz_Theta',
        key: 'Fz_Theta',
      },
      {
        title: 'Fz_LowAlpha',
        dataIndex: 'Fz_LowAlpha',
        key: 'Fz_LowAlpha',
      },
      {
        title: 'Fz_HighAlpha',
        dataIndex: 'Fz_HighAlpha',
        key: 'Fz_HighAlpha',
      },
      {
        title: 'Fz_LowBeta',
        dataIndex: 'Fz_LowBeta',
        key: 'Fz_LowBeta',
      },
      {
        title: 'Fz_HighBeta',
        dataIndex: 'Fz_HighBeta',
        key: 'Fz_HighBeta',
      },
      {
        title: 'Fz_LowGamma',
        dataIndex: 'Fz_LowGamma',
        key: 'Fz_LowGamma',
      },
      {
        title: 'Fz_HighGamma',
        dataIndex: 'Fz_HighGamma',
        key: 'Fz_HighGamma',
      },
      {
        title: 'C3_Delta',
        dataIndex: 'C3_Delta',
        key: 'C3_Delta',
      },
      {
        title: 'C3_Theta',
        dataIndex: 'C3_Theta',
        key: 'C3_Theta',
      },
      {
        title: 'C3_LowAlpha',
        dataIndex: 'C3_LowAlpha',
        key: 'C3_LowAlpha',
      },
      {
        title: 'C3_HighAlpha',
        dataIndex: 'C3_HighAlpha',
        key: 'C3_HighAlpha',
      },
      {
        title: 'C3_LowBeta',
        dataIndex: 'C3_LowBeta',
        key: 'C3_LowBeta',
      },
      {
        title: 'C3_HighBeta',
        dataIndex: 'C3_HighBeta',
        key: 'C3_HighBeta',
      },
      {
        title: 'C3_LowGamma',
        dataIndex: 'C3_LowGamma',
        key: 'C3_LowGamma',
      },
      {
        title: 'C3_HighGamma',
        dataIndex: 'C3_HighGamma',
        key: 'C3_HighGamma',
      },
      {
        title: 'C4_Delta',
        dataIndex: 'C4_Delta',
        key: 'C4_Delta',
      },
      {
        title: 'C4_Theta',
        dataIndex: 'C4_Theta',
        key: 'C4_Theta',
      },
      {
        title: 'C4_LowAlpha',
        dataIndex: 'C4_LowAlpha',
        key: 'C4_LowAlpha',
      },
      {
        title: 'C4_HighAlpha',
        dataIndex: 'C4_HighAlpha',
        key: 'C4_HighAlpha',
      },
      {
        title: 'C4_LowBeta',
        dataIndex: 'C4_LowBeta',
        key: 'C4_LowBeta',
      },
      {
        title: 'C4_HighBeta',
        dataIndex: 'C4_HighBeta',
        key: 'C4_HighBeta',
      },
      {
        title: 'C4_LowGamma',
        dataIndex: 'C4_LowGamma',
        key: 'C4_LowGamma',
      },
      {
        title: 'C4_HighGamma',
        dataIndex: 'C4_HighGamma',
        key: 'C4_HighGamma',
      },
      {
        title: 'A1_Delta',
        dataIndex: 'A1_Delta',
        key: 'A1_Delta',
      },
      {
        title: 'A1_Theta',
        dataIndex: 'A1_Theta',
        key: 'A1_Theta',
      },
      {
        title: 'A1_LowAlpha',
        dataIndex: 'A1_LowAlpha',
        key: 'A1_LowAlpha',
      },
      {
        title: 'A1_HighAlpha',
        dataIndex: 'A1_HighAlpha',
        key: 'A1_HighAlpha',
      },
      {
        title: 'A1_LowBeta',
        dataIndex: 'A1_LowBeta',
        key: 'A1_LowBeta',
      },
      {
        title: 'A1_HighBeta',
        dataIndex: 'A1_HighBeta',
        key: 'A1_HighBeta',
      },
      {
        title: 'A1_LowGamma',
        dataIndex: 'A1_LowGamma',
        key: 'A1_LowGamma',
      },
      {
        title: 'A1_HighGamma',
        dataIndex: 'A1_HighGamma',
        key: 'A1_HighGamma',
      },
      {
        title: 'Pz_Delta',
        dataIndex: 'Pz_Delta',
        key: 'Pz_Delta',
      },
      {
        title: 'Pz_Theta',
        dataIndex: 'Pz_Theta',
        key: 'Pz_Theta',
      },
      {
        title: 'Pz_LowAlpha',
        dataIndex: 'Pz_LowAlpha',
        key: 'Pz_LowAlpha',
      },
      {
        title: 'Pz_HighAlpha',
        dataIndex: 'Pz_HighAlpha',
        key: 'Pz_HighAlpha',
      },
      {
        title: 'Pz_LowBeta',
        dataIndex: 'Pz_LowBeta',
        key: 'Pz_LowBeta',
      },
      {
        title: 'Pz_HighBeta',
        dataIndex: 'Pz_HighBeta',
        key: 'Pz_HighBeta',
      },
      {
        title: 'Pz_LowGamma',
        dataIndex: 'Pz_LowGamma',
        key: 'Pz_LowGamma',
      },
      {
        title: 'Pz_HighGamma',
        dataIndex: 'Pz_HighGamma',
        key: 'Pz_HighGamma',
      },
      {
        title: 'A2_Delta',
        dataIndex: 'A2_Delta',
        key: 'A2_Delta',
      },
      {
        title: 'A2_Theta',
        dataIndex: 'A2_Theta',
        key: 'A2_Theta',
      },
      {
        title: 'A2_LowAlpha',
        dataIndex: 'A2_LowAlpha',
        key: 'A2_LowAlpha',
      },
      {
        title: 'A2_HighAlpha',
        dataIndex: 'A2_HighAlpha',
        key: 'A2_HighAlpha',
      },
      {
        title: 'A2_LowBeta',
        dataIndex: 'A2_LowBeta',
        key: 'A2_LowBeta',
      },
      {
        title: 'A2_HighBeta',
        dataIndex: 'A2_HighBeta',
        key: 'A2_HighBeta',
      },
      {
        title: 'A2_LowGamma',
        dataIndex: 'A2_LowGamma',
        key: 'A2_LowGamma',
      },
      {
        title: 'A2_HighGamma',
        dataIndex: 'A2_HighGamma',
        key: 'A2_HighGamma',
      },
      {
        title: 'O1_Delta',
        dataIndex: 'O1_Delta',
        key: 'O1_Delta',
      },
      {
        title: 'O1_Theta',
        dataIndex: 'O1_Theta',
        key: 'O1_Theta',
      },
      {
        title: 'O1_LowAlpha',
        dataIndex: 'O1_LowAlpha',
        key: 'O1_LowAlpha',
      },
      {
        title: 'O1_HighAlpha',
        dataIndex: 'O1_HighAlpha',
        key: 'O1_HighAlpha',
      },
      {
        title: 'O1_LowBeta',
        dataIndex: 'O1_LowBeta',
        key: 'O1_LowBeta',
      },
      {
        title: 'O1_HighBeta',
        dataIndex: 'O1_HighBeta',
        key: 'O1_HighBeta',
      },
      {
        title: 'O1_LowGamma',
        dataIndex: 'O1_LowGamma',
        key: 'O1_LowGamma',
      },
      {
        title: 'O1_HighGamma',
        dataIndex: 'O1_HighGamma',
        key: 'O1_HighGamma',
      },
      {
        title: 'O2_Delta',
        dataIndex: 'O2_Delta',
        key: 'O2_Delta',
      },
      {
        title: 'O2_Theta',
        dataIndex: 'O2_Theta',
        key: 'O2_Theta',
      },
      {
        title: 'O2_LowAlpha',
        dataIndex: 'O2_LowAlpha',
        key: 'O2_LowAlpha',
      },
      {
        title: 'O2_HighAlpha',
        dataIndex: 'O2_HighAlpha',
        key: 'O2_HighAlpha',
      },
      {
        title: 'O2_LowBeta',
        dataIndex: 'O2_LowBeta',
        key: 'O2_LowBeta',
      },
      {
        title: 'O2_HighBeta',
        dataIndex: 'O2_HighBeta',
        key: 'O2_HighBeta',
      },
      {
        title: 'O2_LowGamma',
        dataIndex: 'O2_LowGamma',
        key: 'O2_LowGamma',
      },
      {
        title: 'O2_HighGamma',
        dataIndex: 'O2_HighGamma',
        key: 'O2_HighGamma',
      },
      {
        title: 'firstTree',
        dataIndex: 'firstTree',
        key: 'firstTree',
      },
      {
        title: 'secondTree',
        dataIndex: 'secondTree',
        key: 'secondTree',
        fixed: 'right'
      },
    ];
    const title =
      <div>
        <h3>列表分析</h3>

      </div>
    return <Table dataSource={dataSource} columns={columns} scroll={{ x: 8350 }} bordered rowKey={record => record.id} loading={loading} />;
  }

  render() {
    const { data, dataset, analysis } = this.state;
    const { match } = this.props;
    return (
      <div>
        <div style={{ width: '100', backgroundColor: '#0B9ED9', fontSize: 32, color: '#F2F2F2', height: '50px', textAlign: 'center' }}>
          元弘資訊-特徵分析
        </div>
        <div style={{ backgroundColor: '#F5F5F5', padding: 24, }}>
          <PageHeader ghost={false} title='分析結果' extra={[<Button type='primary' key='1' onClick={() => { this.props.history.goBack(); }}>返回</Button>]}>
            <Descriptions size='small' column={4} >
              <Descriptions.Item label='資料集名稱'>{data.name}</Descriptions.Item>
              <Descriptions.Item label='分析時間'>{data.createdAt}</Descriptions.Item>
              <Descriptions.Item label='檔案類型'>{data.mimetype}</Descriptions.Item>
              <Descriptions.Item label='檔案大小'>{moment(data.size).format('YYYY-MM-DD')}</Descriptions.Item>
              <Descriptions.Item>
                <Button type="link" onClick={() => this.setState({ dataset: true, analysis: false })}>數據分析</Button>
                <Divider type='vertical' />
                <Button type="link" onClick={() => this.setState({ dataset: false, analysis: true })}>圖表分析</Button>
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </div>
        <div style={{ padding: 24, }}>{dataset === true ? this.renderTable() : <HighCharts file_id={match.params.id} />}</div>
      </div >
    );
  }
};



