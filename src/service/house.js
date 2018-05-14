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

/**
 * 获取同城房子列表
 */
export const getSameHouseList = (cityId, offset) => {
	return new Promise(function(reslove, reject){
        const data = [
            {
                ID: 1,
                title: "明怡花园三居室",
                area: "70",
                orientations: "朝南",
                address: "明怡花园20栋301室",
                imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/1.jpeg'],
                rentForMonth: 4500,
                leaseType: "整租",
            },
            {
                ID: 2,
                title: "西溪花园紫林苑",
                area: "25",
                orientations: "朝南",
                address: "西溪花园紫林苑30栋301室",
                imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/2.jpeg'],
                rentForMonth: 1500,
                leaseType: "合租",
            },
            {
                ID: 3,
                title: "阿里海创园厂房",
                area: "300",
                orientations: "朝北",
                address: "杭州市文一西路998号",
                imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/3.jpeg'],
                rentForMonth: 3000,
                leaseType: "整租",
            },
            {
                ID: 4,
                title: "玉兰香苑",
                area: "105",
                orientations: "朝南",
                address: "玉兰香苑10栋501室",
                imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/4.jpeg'],
                rentForMonth: 1000,
                leaseType: "合租",
            },
            {
                ID: 9,
                title: "明怡花园三居室",
                area: "70",
                orientations: "朝南",
                address: "明怡花园20栋301室",
                imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/1.jpeg'],
                rentForMonth: 4500,
                leaseType: "整租",
            },
            {
                ID: 10,
                title: "西溪花园紫林苑",
                area: "25",
                orientations: "朝南",
                address: "西溪花园紫林苑30栋301室",
                imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/2.jpeg'],
                rentForMonth: 1500,
                leaseType: "合租",
            },
            {
                ID: 11,
                title: "阿里海创园厂房",
                area: "300",
                orientations: "朝北",
                address: "杭州市文一西路998号",
                imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/3.jpeg'],
                rentForMonth: 3000,
                leaseType: "整租",
            },
            {
                ID: 12,
                title: "玉兰香苑",
                area: "105",
                orientations: "朝南",
                address: "玉兰香苑10栋501室",
                imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/4.jpeg'],
                rentForMonth: 1000,
                leaseType: "合租",
            },
            {
                ID: 5,
                title: "明怡花园三居室",
                area: "70",
                orientations: "朝南",
                address: "明怡花园20栋301室",
                imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/1.jpeg'],
                rentForMonth: 4500,
                leaseType: "整租",
            },
            {
                ID: 6,
                title: "西溪花园紫林苑",
                area: "25",
                orientations: "朝南",
                address: "西溪花园紫林苑30栋301室",
                imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/2.jpeg'],
                rentForMonth: 1500,
                leaseType: "合租",
            },
            {
                ID: 7,
                title: "阿里海创园厂房",
                area: "300",
                orientations: "朝北",
                address: "杭州市文一西路998号",
                imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/3.jpeg'],
                rentForMonth: 3000,
                leaseType: "整租",
            },
            {
                ID: 8,
                title: "玉兰香苑",
                area: "105",
                orientations: "朝南",
                address: "玉兰香苑10栋501室",
                imgURLList:['http://7xrsfo.com1.z0.glb.clouddn.com/4.jpeg'],
                rentForMonth: 1000,
                leaseType: "合租",
            },
        ]
		return reslove(data)
	})
};