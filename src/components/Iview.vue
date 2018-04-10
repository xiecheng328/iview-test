
<template>
    <div>
        <!-- <a href="https://www.iviewui.com/components/grid">官网</a> -->

        <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="settings"></Icon>
            综合设置
        </MenuItem>
    </Menu>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>

    
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>

    <!-- <Progress :percent="25"></Progress>
    <Progress :percent="45" status="active"></Progress>
    <Progress :percent="65" status="wrong"></Progress>
    <Progress :percent="100"></Progress>
    <Progress :percent="25" hide-info></Progress> -->
    <br>
     <Carousel autoplay v-model="value3" loop>
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../assets/logo.png" alt="">
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../assets/logo.png" alt="">
                
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../assets/logo.png" alt="">
                
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img src="../assets/logo.png" alt="">
                
            </div>
        </CarouselItem>
    </Carousel>

    <Table border :columns="columns7" :data="data6"></Table>
    
    <Row>
        <Col span="12">
            <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>

    <Steps :current="1">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>



    </div>

    
</template>

<script>
export default {
  data() {
    return {
      theme1: "primary",
      value3: 0,
       value1: '2016-01-01',
    value2: ['2016-01-01', '2016-02-15'],
      columns7: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
    };
  }
};
</script>


<style scoped>
.ivu-carousel-item {
  text-align: center;
}
</style>

