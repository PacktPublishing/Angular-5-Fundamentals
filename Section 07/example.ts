// for sorting
/tasks/114?sortOrder=ascending
// for narrowing down the data set
/tasks/114?page=3&pageSize=10


constructor(private route: ActivatedRoute) {}

getData(){
    this. route. queryParamMap
    . switchMap( data => {
    let pageSize = data. get('pageSize' );
    let page = data. get('page' );
    return this. _service. getTaskLimited(pageSize, page);
})