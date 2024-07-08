import API from "../service/API.js"

export const auth = {
	user: null,
	avatar: null,

	logout: async () => {
		const response = await API.logout();
	},
	loginIntra: async () => {
		window.location.href = "http://127.0.0.1:8000/api/oauth/intra/";
	},
	loginGoogle: async () => {
		window.location.href = "http://127.0.0.1:8000/api/google/";
	},
	isAuth: async () => {
		const response = await API.isLogedIn();
		if (response.ok) {
			const res = await response.json();
			const { isLoged } = res;
			console.log(res);
			auth.user = res.data.username;
			auth.avatar = res.data.avatar;
			auth.loses = res.data.losses;
			auth.wins = res.data.wins;
			auth.fullname = res.data.first_name + " " + res.data.last_name;
			return isLoged;
		}
		return false;
	},
};
