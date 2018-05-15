/**
 * 获取推荐房子列表
 */
export const getRecommendHouseList = () => {
	return new Promise(function(reslove, reject){
        const data = [
            {
                id: 1,
                link:'/lhome',
                imgUrl:'http://7xrsfo.com1.z0.glb.clouddn.com/1.jpeg',
            },
            {
                id: 2,
                link:'/lhome',
                imgUrl:'http://7xrsfo.com1.z0.glb.clouddn.com/2.jpeg',
            },
            {
                id: 3,
                link:'/lhome',
                imgUrl:'http://7xrsfo.com1.z0.glb.clouddn.com/3.jpeg',
            },
            {
                id: 4,
                link:'/lhome',
                imgUrl:'http://7xrsfo.com1.z0.glb.clouddn.com/4.jpeg',
            },
        ]
		return reslove(data)
	})
};


const HOUSE_DATA = [
    {
        ID: 1,
        title: "明怡花园三居室",
        area: "70",
        orientations: "朝南",
        address: "明怡花园20栋301室",
        houseType: "两室一厅", //户型
        decoration: "精装修", //装修
        floor: "中层/25层", //楼层
        imgURLList:[
            'http://7xrsfo.com1.z0.glb.clouddn.com/1.jpeg',
            'http://7xrsfo.com1.z0.glb.clouddn.com/1.jpg-fdd800',
            'http://7xrsfo.com1.z0.glb.clouddn.com/2.jpg-fdd800',
            'http://7xrsfo.com1.z0.glb.clouddn.com/3.jpg-fdd800',
            'http://7xrsfo.com1.z0.glb.clouddn.com/4.jpg-fdd800'
        ],
        rentForMonth: 4500,
        leaseType: "整租",
        leaseStatus: "已删除",
        cityCode: "123",
        updatedDate: "2018-05-10",
        equipment: [
            '床', '宽带', '电视', '洗衣机', '暖气', '空调', '冰箱', '热水器', '衣柜', '阳台'
        ],
        des: "1.拎包入住, 交通方便\n2.周边配图齐全\n3.房东人好",
        villageName: "玉兰香苑",
        location: {
            longitude: 101.23,
            latitude: 25.678
        },
        contact:{ //联系人
            name: '王旺旺',
            sex: 'male',
            phone: '15232345678'
        }
    },
    {
        ID: 2,
        title: "西溪花园紫林苑",
        area: "25",
        orientations: "朝南",
        address: "西溪花园紫林苑30栋301室",
        houseType: "一室一厅", //户型
        decoration: "精装修", //装修
        floor: "低层/15层", //楼层
        imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/2.jpeg'],
        rentForMonth: 1500,
        leaseType: "合租",
        leaseStatus: "待出租",
        cityCode: "123",
        updatedDate: "2018-05-10",
        equipment: [
            '床', '宽带', '电视', '洗衣机', '暖气', '空调', '冰箱', '热水器', '衣柜', '阳台'
        ],
        des: "1.拎包入住, 交通方便\n2.周边配图齐全\n3.房东人好",
        villageName: "玉兰香苑",
        location: {
            longitude: 101.23,
            latitude: 25.678
        },
        contact:{ //联系人
            name: '王旺旺',
            sex: 'male',
            phone: '15232345678'
        }
    },
    {
        ID: 3,
        title: "阿里海创园厂房",
        area: "300",
        orientations: "朝北",
        address: "杭州市文一西路998号",
        houseType: "一室一厅", //户型
        decoration: "精装修", //装修
        floor: "低层/15层", //楼层
        imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/3.jpeg'],
        rentForMonth: 3000,
        leaseType: "整租",
        leaseStatus: "待出租",
        cityCode: "123",
        updatedDate: "2018-05-10",
        equipment: [
            '床', '宽带', '电视', '洗衣机', '暖气', '空调', '冰箱', '热水器'
        ],
        des: "1.拎包入住, 交通方便\n2.周边配图齐全\n3.房东人好",
        villageName: "玉兰香苑",
        location: {
            longitude: 101.23,
            latitude: 25.678
        },
        contact:{ //联系人
            name: '王旺旺',
            sex: 'male',
            phone: '15232345678'
        }
    },
    {
        ID: 4,
        title: "玉兰香苑",
        area: "105",
        orientations: "朝南",
        address: "玉兰香苑10栋501室",
        houseType: "一室一厅", //户型
        decoration: "精装修", //装修
        floor: "低层/15层", //楼层
        imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/4.jpeg'],
        rentForMonth: 1000,
        leaseType: "合租",
        leaseStatus: "待出租",
        cityCode: "123",
        updatedDate: "2018-05-10",
        equipment: [
            '床', '宽带', '电视', '洗衣机', '暖气', '空调', '冰箱', '热水器', '衣柜'
        ],
        des: "1.拎包入住, 交通方便\n2.周边配图齐全\n3.房东人好",
        villageName: "玉兰香苑",
        location: {
            longitude: 101.23,
            latitude: 25.678
        },
        contact:{ //联系人
            name: '王旺旺',
            sex: 'male',
            phone: '15232345678'
        }
    },
    {
        ID: 9,
        title: "明怡花园三居室",
        area: "70",
        orientations: "朝南",
        address: "明怡花园20栋301室",
        houseType: "一室一厅", //户型
        decoration: "精装修", //装修
        floor: "低层/15层", //楼层
        imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/1.jpeg'],
        rentForMonth: 4500,
        leaseType: "整租",
        leaseStatus: "待出租",
        cityCode: "123",
        updatedDate: "2018-05-10",
        equipment: [
            '床', '宽带', '电视', '洗衣机', '暖气', '空调', '冰箱', '热水器', '衣柜', '阳台'
        ],
        des: "1.拎包入住, 交通方便\n2.周边配图齐全\n3.房东人好",
        villageName: "玉兰香苑",
        location: {
            longitude: 101.23,
            latitude: 25.678
        },
        contact:{ //联系人
            name: '王旺旺',
            sex: 'male',
            phone: '15232345678'
        }
    },
    {
        ID: 10,
        title: "西溪花园紫林苑",
        area: "25",
        orientations: "朝南",
        address: "西溪花园紫林苑30栋301室",
        houseType: "一室一厅", //户型
        decoration: "精装修", //装修
        floor: "低层/15层", //楼层
        imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/2.jpeg'],
        rentForMonth: 1500,
        leaseType: "合租",
        leaseStatus: "出租中",
        cityCode: "123",
        updatedDate: "2018-05-10",
        equipment: [
            '床', '宽带', '电视', '洗衣机', '暖气', '空调', '冰箱', '热水器', '衣柜', '阳台'
        ],
        des: "1.拎包入住, 交通方便\n2.周边配图齐全\n3.房东人好",
        villageName: "玉兰香苑",
        location: {
            longitude: 101.23,
            latitude: 25.678
        },
        contact:{ //联系人
            name: '王旺旺',
            sex: 'male',
            phone: '15232345678'
        }
    },
    {
        ID: 11,
        title: "阿里海创园厂房",
        area: "300",
        orientations: "朝北",
        address: "杭州市文一西路998号",
        houseType: "一室一厅", //户型
        decoration: "精装修", //装修
        floor: "低层/15层", //楼层
        imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/3.jpeg'],
        rentForMonth: 3000,
        leaseType: "整租",
        leaseStatus: "出租中",
        cityCode: "123",
        updatedDate: "2018-05-10",
        equipment: [
            '床', '宽带', '电视', '洗衣机', '暖气', '空调', '冰箱', '热水器', '衣柜', '阳台'
        ],
        des: "1.拎包入住, 交通方便\n2.周边配图齐全\n3.房东人好",
        villageName: "玉兰香苑",
        location: {
            longitude: 101.23,
            latitude: 25.678
        },
        contact:{ //联系人
            name: '王旺旺',
            sex: 'male',
            phone: '15232345678'
        }
    },
    {
        ID: 12,
        title: "玉兰香苑",
        area: "105",
        orientations: "朝南",
        address: "玉兰香苑10栋501室",
        houseType: "一室一厅", //户型
        decoration: "精装修", //装修
        floor: "低层/15层", //楼层
        imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/4.jpeg'],
        rentForMonth: 1000,
        leaseType: "合租",
        leaseStatus: "出租中",
        cityCode: "123",
        updatedDate: "2018-05-10",
        equipment: [
            '床', '宽带', '电视', '洗衣机', '暖气', '空调', '冰箱', '热水器', '衣柜', '阳台'
        ],
        des: "1.拎包入住, 交通方便\n2.周边配图齐全\n3.房东人好",
        villageName: "玉兰香苑",
        location: {
            longitude: 101.23,
            latitude: 25.678
        },
        contact:{ //联系人
            name: '王旺旺',
            sex: 'male',
            phone: '15232345678'
        }
    },
    {
        ID: 5,
        title: "明怡花园三居室",
        area: "70",
        orientations: "朝南",
        address: "明怡花园20栋301室",
        houseType: "一室一厅", //户型
        decoration: "精装修", //装修
        floor: "低层/15层", //楼层
        imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/1.jpeg'],
        rentForMonth: 4500,
        leaseType: "整租",
        leaseStatus: "出租中",
        cityCode: "456",
        updatedDate: "2018-05-10",
        equipment: [
            '床', '宽带', '电视', '洗衣机', '暖气', '空调', '冰箱', '热水器', '衣柜', '阳台'
        ],
        des: "1.拎包入住, 交通方便\n2.周边配图齐全\n3.房东人好",
        villageName: "玉兰香苑",
        location: {
            longitude: 101.23,
            latitude: 25.678
        },
        contact:{ //联系人
            name: '王旺旺',
            sex: 'male',
            phone: '15232345678'
        }
    },
    {
        ID: 6,
        title: "西溪花园紫林苑",
        area: "25",
        orientations: "朝南",
        address: "西溪花园紫林苑30栋301室",
        houseType: "一室一厅", //户型
        decoration: "精装修", //装修
        floor: "低层/15层", //楼层
        imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/2.jpeg'],
        rentForMonth: 1500,
        leaseType: "合租",
        leaseStatus: "出租中",
        cityCode: "456",
        updatedDate: "2017-12-10",
        equipment: [
            '床', '宽带', '电视', '洗衣机', '暖气', '空调', '冰箱', '热水器', '衣柜', '阳台'
        ],
        des: "1.拎包入住, 交通方便\n2.周边配图齐全\n3.房东人好",
        villageName: "玉兰香苑",
        location: {
            longitude: 101.23,
            latitude: 25.678
        },
        contact:{ //联系人
            name: '王旺旺',
            sex: 'male',
            phone: '15232345678'
        }
    },
    {
        ID: 7,
        title: "阿里海创园厂房",
        area: "300",
        orientations: "朝北",
        address: "杭州市文一西路998号",
        houseType: "一室一厅", //户型
        decoration: "精装修", //装修
        floor: "低层/15层", //楼层
        imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/3.jpeg'],
        rentForMonth: 3000,
        leaseType: "整租",
        leaseStatus: "已删除",
        cityCode: "123",
        updatedDate: "2018-03-10",
        equipment: [
            '床', '宽带', '电视', '洗衣机', '暖气', '空调', '冰箱', '热水器', '衣柜', '阳台'
        ],
        des: "1.拎包入住, 交通方便\n2.周边配图齐全\n3.房东人好",
        villageName: "玉兰香苑",
        location: {
            longitude: 101.23,
            latitude: 25.678
        },
        contact:{ //联系人
            name: '王旺旺',
            sex: 'male',
            phone: '15232345678'
        }
    },
    {
        ID: 8,
        title: "玉兰香苑",
        area: "105",
        orientations: "朝南",
        address: "玉兰香苑10栋501室",
        houseType: "一室一厅", //户型
        decoration: "精装修", //装修
        floor: "低层/15层", //楼层
        imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/4.jpeg'],
        rentForMonth: 1000,
        leaseType: "合租",
        leaseStatus: "已删除",
        cityCode: "123",
        updatedDate: "2018-04-10",
        equipment: [
            '床', '宽带', '电视', '洗衣机', '暖气', '空调', '冰箱', '热水器', '衣柜', '阳台'
        ],
        des: "1.拎包入住, 交通方便\n2.周边配图齐全\n3.房东人好",
        villageName: "玉兰香苑",
        location: {
            longitude: 101.23,
            latitude: 25.678
        },
        contact:{ //联系人
            name: '王旺旺',
            sex: 'male',
            phone: '15232345678'
        }
    },
]

/**
 * 获取同城房子列表
 */
export const getSameHouseList = (cityCode, offset) => {
	return new Promise(function(reslove, reject){
        const data = HOUSE_DATA.filter(function(house){
            return house.cityCode === cityCode
        })
		return reslove(data)
	})
};

/**
 * 获取房子列表
 */
export const getHouseListByLeaseStatus = (leaseStatus, offset) => {
	return new Promise(function(reslove, reject){
        console.log(leaseStatus)
        const data = HOUSE_DATA.filter(function(house){
            return house.leaseStatus === leaseStatus
        })
		return reslove(data)
	})
};


/**
 * 获取房子详情
 */
export const getHouseDetail = (id) => {
    console.log(id)
	return new Promise(function(reslove, reject){
        const data = HOUSE_DATA.find(function(house){
            return house.ID === parseInt(id)
        })
		return reslove(data)
	})
};
