import type { TreeNode } from "@/components/Tree"

interface IGeneratorOptions {
    treeDepth?: number
    nodesPerLevel?: number
    sameIdTitle?: boolean
    inOrder?: boolean
    forceString?: boolean
    useNanoID?: boolean
}

const genRandomStr = ({ index, useNanoID }: { index?: number; useNanoID?: boolean }): string => {
    const randomStr = Math.random().toString(36).substr(2, 5);
    return index == null ? randomStr : `${randomStr}`
}

export default ({
  treeDepth = 5,
  nodesPerLevel,
  sameIdTitle = false,
  inOrder = false,
  forceString = false,
  useNanoID = false,
}: IGeneratorOptions = {}): { data: TreeNode[]; total: number } => {
  const data: TreeNode[] = []
  let total = 0
  let orderCount = 0
  const genNodeData = (root: TreeNode[], level: number = 0): void => {
    if (level >= treeDepth) return
    const len: number = nodesPerLevel
      ? nodesPerLevel
      : Math.floor(Math.random() * 100)
    for (let i: number = 0; i < len; i++) {
      let title = inOrder ? orderCount : genRandomStr({ index: orderCount })
      if (forceString) title = title.toString()
      const id = sameIdTitle ? title : genRandomStr({ index: orderCount, useNanoID })
      const node = {
        title,
        id,
        children: []
      } as unknown as TreeNode;
      root.push(node)
      total++
      orderCount++
      genNodeData(node.children!, level + 1)
    }
  }
  genNodeData(data)
  return {
    data,
    total
  }
}
