"use strict";
import {
	getMovie
} from "./../api/resource";
/**
 * 获取电影
 */
export const fetchMovie = ({
	dispatch
}) => {
	const ResourcesURI = ['in_theaters', 'coming_soon', 'top250'];
	// 数据请求
	const resData = [];
	const hotwords = [];
	ResourcesURI.map((item, index) => {
		getMovie(item, {
			count: 6
		}).then((response) => {
			// 存储搜索结果
			resData.push({
				index: index, // 通过orderBy按请求顺序显示
				name: item,
				title: response.data.title.split('-')[0],
				total: response.data.total,
				list: response.data.subjects
			});
			if (resData.length === ResourcesURI.length) {
				dispatch('FETCH_NEWMOVIE_SUCCESS', resData);
				dispatch('FETCH_LODING', true);
			}
		})
	});
};
/**
 * 获取电影
 */
export const listMovie = ({
	dispatch
}, movieType, data) => {
	getMovie(movieType, data).then((response) => {
		if (data.page === 1) {
			document.title = response.data.title.split('-')[0];
			dispatch('FETCH_LODING', true);
			dispatch('FETCH_TITLE', response.data.title.split('-')[0]);
			dispatch('FETCH_LISTMOVIE_SUCCESS', response.data.subjects);
		}
		if (response.data.subjects.length > 0 && data.page > 1) {
			dispatch('FETCH_LISTMOREMOVIE_SUCCESS', response.data.subjects);
		}
	})
};