import axios from 'axios'

export const CHANGE_NAV_STATE = 'CHANGE_NAV_STATE'  //改变侧边导航开合状态
export const FETCH_CITY_SUCCESS = 'FETCH_CITY_SUCCESS'

export const changeNavState = (isNavOpen) => ({
    type: CHANGE_NAV_STATE,
    isNavOpen
})

export const fetchCity = () => (dispatch, getState) =>{ 
    var citysearch = new AMap.CitySearch(); //实例化城市查询类
    //自动获取用户IP，返回当前城市
    return citysearch.getLocalCity(function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            if (result && result.city) {
                var city = result.city;
                console.log(cityinfo);
                dispatch({
                    type: FETCH_CITY_SUCCESS,
                    city
                })
                
            }
        } else {
            console.log(result.info);
        }
    });
}