export const configTab = {
    girls: '福利',
    front: '前端',
    Android: 'Android',
    iOS: 'iOS',
    other: '拓展资源'
}

export const timeFormat = (time) => {
    const timeDiff=(new Date().getTime() - new Date(time).getTime())/3600000;
    if(timeDiff/24 >=1){
        return Math.floor(timeDiff/24) + ' 天前';
    }else if(timeDiff >1){
        return Math.floor(timeDiff) + ' 小时前';
    }else if(timeDiff < 1){
        return Math.ceil(timeDiff*60) + ' 分钟前';
    }       
}