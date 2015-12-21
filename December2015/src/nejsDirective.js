export default app => {
	app.directive('nejsDirective', nejsDirectiveFn);

	function nejsDirectiveFn() {
		return {
			restrict: "E",
			template: '<div>Hello</div>'
		}
	}






}