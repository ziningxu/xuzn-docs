import { requestApi } from '@/utils/request'
import { sleep } from 'xuzn-ui'
// 获取界面列表
export async function getPageList(data: any = {}) {
  await sleep(600)
  return { rows: getItems(data.current, data.size), total: 300 }
}
// 新增
export async function pageListAdd(data = {}) {
  // const url = `/uni/admin/user/add`
  // return requestApi({ url, data })
  console.warn('待完善')
}
// 编辑
export async function pageListEdit(data = {}) {
  // const url = `/uni/admin/user/edit`
  // return requestApi({ url, data })
  console.warn('待完善')
}
// 删除
export async function pageListDel(data = {}) {
  // const url = `/uni/admin/user/del`
  // return requestApi({ url, data })
  console.warn('接口待完善')
}

function getItems(current: number, size: number) {
  const items: any[] = []
  for (let i = 0; i < size; i++) {
    const id = (current - 1) * size + 1 + i
    items.push({
      id,
      name: '姓名_' + id,
      age: 29,
      gender: '男',
      email: `emailemailemail${id}@example.com`,
      phone: '13500135050',
      address: `江苏省南京市玄武区沙河县南山村20巷8号沙河县南山村20巷8号8088-${id}`,
    })
  }
  return items
}
