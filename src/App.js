import React, { Component } from 'react';
import { Upload, message, Button, Icon, Table, PageHeader } from 'antd';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import moment from 'moment';
export default class App extends Component {
  state = {
    fileList: [],
    uploading: false,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    (async () => {
      const res = await fetch('http://211.75.191.19:3006/file');
      const data = await res.text();
      this.setState({ data: JSON.parse(data), loading: false })
    })();
  }

  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    formData.append('file', fileList[0]);
    this.setState({
      uploading: true,
    });
    fetch('http://211.75.191.19:3006/file', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        response.json();
        (async () => {
          const res = await fetch('http://211.75.191.19:3006/file');
          const data = await res.text();
          this.setState({ data: JSON.parse(data) })
        })();
      })
      .catch(() => message.error('上傳失敗！'))
      .then(() => {
        message.success('上傳成功！');
        this.setState({ uploading: false, fileList: [] });
      })
  };

  renderTable = () => {
    const { data, loading } = this.state;
    const dataSource = [];
    _.map(data, (item, index) => {
      dataSource.push({
        id: item.id,
        index: index + 1,
        name: item.name,
        size: item.size,
        mimetype: item.mimetype,
        createdAt: moment(item.createdAt).format('YYYY-MM-DD h:mm:ss')
      })
    })
    const columns = [
      {
        title: '序號',
        dataIndex: 'index',
        key: 'index',
        align: 'center'
      },
      {
        title: '資料集名稱',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
      },
      {
        title: '檔案大小',
        dataIndex: 'size',
        key: 'size',
        align: 'center'
      },
      {
        title: '建立時間',
        dataIndex: 'createdAt',
        key: 'createdAt',
        align: 'center'
      },
      {
        title: '管理',
        dataIndex: 'manage',
        key: 'manage',
        align: 'center',
        render: (text, record) => {
          return <div><Link to={`/data/${record.id}`}><Button type='primary'>查看</Button></Link></div>;
        },
      }
    ];

    return <Table dataSource={dataSource} columns={columns} pagination bordered title={() => <h2>分析列表</h2>} rowKey={record => record.index} loading={loading} />;
  }

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <div>
        <div style={{ width: '100', backgroundColor: '#0B9ED9', fontSize: 32, color: '#F2F2F2', height: '50px', textAlign: 'center' }}>
          特徵分析
        </div>

        <div style={{ backgroundColor: '#F5F5F5', padding: 24, }}>
          <PageHeader ghost={false} title="上傳檔案">
            <Upload {...props} multiple={false}>
              <Button><Icon type="upload" />選擇檔案</Button>
            </Upload>

            {fileList.length > 0 ?
              <Button
                type="primary"
                onClick={this.handleUpload}
                disabled={fileList.length === 0}
                loading={uploading}
                style={{ marginTop: 16 }}
              >
                {uploading ? '載入中...' : '上傳檔案'}
              </Button>
              : ''
            }
          </PageHeader>
        </div>
        <div style={{ padding: 24, }}>
          {this.renderTable()}
        </div>
      </div >
    );
  }
};



