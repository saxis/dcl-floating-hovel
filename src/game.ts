import {BuilderHUD} from './modules/BuilderHUD'

const scene = new Entity()
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
scene.addComponentOrReplace(transform)
engine.addEntity(scene)

const pillar_Top_Stones_Corner_01 = new Entity()
pillar_Top_Stones_Corner_01.setParent(scene)
const gltfShape = new GLTFShape('models/Pillar_Top_Stones_Corner_01/Pillar_Top_Stones_Corner_01.glb')
pillar_Top_Stones_Corner_01.addComponentOrReplace(gltfShape)
const transform_2 = new Transform({
  position: new Vector3(13.5, 1.5, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Corner_01.addComponentOrReplace(transform_2)
engine.addEntity(pillar_Top_Stones_Corner_01)

const pillar_Top_Stones_Corner_01_2 = new Entity()
pillar_Top_Stones_Corner_01_2.setParent(scene)
pillar_Top_Stones_Corner_01_2.addComponentOrReplace(gltfShape)
const transform_3 = new Transform({
  position: new Vector3(10, 3, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Corner_01_2.addComponentOrReplace(transform_3)
engine.addEntity(pillar_Top_Stones_Corner_01_2)

const pillar_Top_Stones_Corner_01_3 = new Entity()
pillar_Top_Stones_Corner_01_3.setParent(scene)
pillar_Top_Stones_Corner_01_3.addComponentOrReplace(gltfShape)
const transform_4 = new Transform({
  position: new Vector3(4, 6.5, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Corner_01_3.addComponentOrReplace(transform_4)
engine.addEntity(pillar_Top_Stones_Corner_01_3)

const pillar_Top_Stones_Corner_01_4 = new Entity()
pillar_Top_Stones_Corner_01_4.setParent(scene)
pillar_Top_Stones_Corner_01_4.addComponentOrReplace(gltfShape)
const transform_5 = new Transform({
  position: new Vector3(4, 5.5, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Corner_01_4.addComponentOrReplace(transform_5)
engine.addEntity(pillar_Top_Stones_Corner_01_4)

const pillar_Top_Stones_Corner_01_5 = new Entity()
pillar_Top_Stones_Corner_01_5.setParent(scene)
pillar_Top_Stones_Corner_01_5.addComponentOrReplace(gltfShape)
const transform_6 = new Transform({
  position: new Vector3(6.5, 4.5, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Corner_01_5.addComponentOrReplace(transform_6)
engine.addEntity(pillar_Top_Stones_Corner_01_5)

const stone_Module_4M = new Entity()
stone_Module_4M.setParent(scene)
const gltfShape_2 = new GLTFShape('models/Stone_Module_4M/Stone_Module_4M.glb')
stone_Module_4M.addComponentOrReplace(gltfShape_2)
const transform_7 = new Transform({
  position: new Vector3(9.5, 10, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stone_Module_4M.addComponentOrReplace(transform_7)
engine.addEntity(stone_Module_4M)

const module_Stone_Straight_Door_01 = new Entity()
module_Stone_Straight_Door_01.setParent(scene)
const gltfShape_3 = new GLTFShape('models/Module_Stone_Straight_Door_01/Module_Stone_Straight_Door_01.glb')
module_Stone_Straight_Door_01.addComponentOrReplace(gltfShape_3)
const transform_8 = new Transform({
  position: new Vector3(5.5, 10, 7.5),
  rotation: new Quaternion(0, -1.0000000000000002, 0, 2.914335439641036e-16),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_Door_01.addComponentOrReplace(transform_8)
engine.addEntity(module_Stone_Straight_Door_01)

const module_Stone_Straight_01 = new Entity()
module_Stone_Straight_01.setParent(scene)
const gltfShape_4 = new GLTFShape('models/Module_Stone_Straight_01/Module_Stone_Straight_01.glb')
module_Stone_Straight_01.addComponentOrReplace(gltfShape_4)
const transform_9 = new Transform({
  position: new Vector3(5.5, 10, 7.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01.addComponentOrReplace(transform_9)
engine.addEntity(module_Stone_Straight_01)

const module_Stone_Straight_01_2 = new Entity()
module_Stone_Straight_01_2.setParent(scene)
module_Stone_Straight_01_2.addComponentOrReplace(gltfShape_4)
const transform_10 = new Transform({
  position: new Vector3(10, 10, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_2.addComponentOrReplace(transform_10)
engine.addEntity(module_Stone_Straight_01_2)

const module_Stone_Straight_01_3 = new Entity()
module_Stone_Straight_01_3.setParent(scene)
module_Stone_Straight_01_3.addComponentOrReplace(gltfShape_4)
const transform_11 = new Transform({
  position: new Vector3(13.5, 10, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_3.addComponentOrReplace(transform_11)
engine.addEntity(module_Stone_Straight_01_3)

const module_Stone_Straight_01_4 = new Entity()
module_Stone_Straight_01_4.setParent(scene)
module_Stone_Straight_01_4.addComponentOrReplace(gltfShape_4)
const transform_12 = new Transform({
  position: new Vector3(13, 10, 7.5),
  rotation: new Quaternion(0, 0.7071067811865475, 0, 0.7071067811865475),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_4.addComponentOrReplace(transform_12)
engine.addEntity(module_Stone_Straight_01_4)

const module_Stone_Straight_01_5 = new Entity()
module_Stone_Straight_01_5.setParent(scene)
module_Stone_Straight_01_5.addComponentOrReplace(gltfShape_4)
const transform_13 = new Transform({
  position: new Vector3(13.5, 10, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
module_Stone_Straight_01_5.addComponentOrReplace(transform_13)
engine.addEntity(module_Stone_Straight_01_5)

const shelf_02 = new Entity()
shelf_02.setParent(scene)
const gltfShape_5 = new GLTFShape('models/Shelf_02/Shelf_02.glb')
shelf_02.addComponentOrReplace(gltfShape_5)
const transform_14 = new Transform({
  position: new Vector3(12, 10, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
shelf_02.addComponentOrReplace(transform_14)
engine.addEntity(shelf_02)

const stone_Module_4M_2 = new Entity()
stone_Module_4M_2.setParent(scene)
stone_Module_4M_2.addComponentOrReplace(gltfShape_2)
const transform_15 = new Transform({
  position: new Vector3(10, 14, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stone_Module_4M_2.addComponentOrReplace(transform_15)
engine.addEntity(stone_Module_4M_2)


const pillar_Top_Stones_Corner_01_6 = new Entity()
pillar_Top_Stones_Corner_01_6.setParent(scene)
pillar_Top_Stones_Corner_01_6.addComponentOrReplace(gltfShape)
const transform_17 = new Transform({
  position: new Vector3(16, 0, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Corner_01_6.addComponentOrReplace(transform_17)
engine.addEntity(pillar_Top_Stones_Corner_01_6)

const pillar_Top_Stones_Corner_01_7 = new Entity()
pillar_Top_Stones_Corner_01_7.setParent(scene)
pillar_Top_Stones_Corner_01_7.addComponentOrReplace(gltfShape)
const transform_18 = new Transform({
  position: new Vector3(13.5, 0.5, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Corner_01_7.addComponentOrReplace(transform_18)
engine.addEntity(pillar_Top_Stones_Corner_01_7)

const pillar_Top_Stones_Corner_01_8 = new Entity()
pillar_Top_Stones_Corner_01_8.setParent(scene)
pillar_Top_Stones_Corner_01_8.addComponentOrReplace(gltfShape)
const transform_19 = new Transform({
  position: new Vector3(4.5, 8, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pillar_Top_Stones_Corner_01_8.addComponentOrReplace(transform_19)
engine.addEntity(pillar_Top_Stones_Corner_01_8)

// const stone_Module_4M_3 = new Entity()
// stone_Module_4M_3.setParent(scene)
// stone_Module_4M_3.addComponentOrReplace(gltfShape_2)
// const transform_20 = new Transform({
//   position: new Vector3(11, 14, 11.5),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// stone_Module_4M_3.addComponentOrReplace(transform_20)
// engine.addEntity(stone_Module_4M_3)

const stone_Module_4M_4 = new Entity()
stone_Module_4M_4.setParent(scene)
stone_Module_4M_4.addComponentOrReplace(gltfShape_2)
const transform_21 = new Transform({
  position: new Vector3(13.5, 10, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stone_Module_4M_4.addComponentOrReplace(transform_21)
engine.addEntity(stone_Module_4M_4)

const module_Stair_Straight_1M = new Entity()
module_Stair_Straight_1M.setParent(scene)
const gltfShape_20 = new GLTFShape('models/Module_Stair_Straight_1M/Module_Stair_Straight_1M.glb')
module_Stair_Straight_1M.addComponentOrReplace(gltfShape_20)
const transform_60 = new Transform({
  position: new Vector3(11, 12.5, 11.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stair_Straight_1M.addComponentOrReplace(transform_60)
engine.addEntity(module_Stair_Straight_1M)

const module_Stair_Straight_1M_2 = new Entity()
module_Stair_Straight_1M_2.setParent(scene)
module_Stair_Straight_1M_2.addComponentOrReplace(gltfShape_20)
const transform_61 = new Transform({
  position: new Vector3(10, 12, 11.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stair_Straight_1M_2.addComponentOrReplace(transform_61)
engine.addEntity(module_Stair_Straight_1M_2)

const module_Stair_Straight_1M_3 = new Entity()
module_Stair_Straight_1M_3.setParent(scene)
module_Stair_Straight_1M_3.addComponentOrReplace(gltfShape_20)
const transform_62 = new Transform({
  position: new Vector3(12, 13, 11.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stair_Straight_1M_3.addComponentOrReplace(transform_62)
engine.addEntity(module_Stair_Straight_1M_3)

const module_Stair_Straight_1M_4 = new Entity()
module_Stair_Straight_1M_4.setParent(scene)
module_Stair_Straight_1M_4.addComponentOrReplace(gltfShape_20)
const transform_63 = new Transform({
  position: new Vector3(9, 11.5, 11.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stair_Straight_1M_4.addComponentOrReplace(transform_63)
engine.addEntity(module_Stair_Straight_1M_4)

const module_Stair_Straight_1M_5 = new Entity()
module_Stair_Straight_1M_5.setParent(scene)
module_Stair_Straight_1M_5.addComponentOrReplace(gltfShape_20)
const transform_64 = new Transform({
  position: new Vector3(8, 11, 11.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stair_Straight_1M_5.addComponentOrReplace(transform_64)
engine.addEntity(module_Stair_Straight_1M_5)

const module_Stair_Straight_1M_6 = new Entity()
module_Stair_Straight_1M_6.setParent(scene)
module_Stair_Straight_1M_6.addComponentOrReplace(gltfShape_20)
const transform_65 = new Transform({
  position: new Vector3(7, 10.5, 11.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stair_Straight_1M_6.addComponentOrReplace(transform_65)
engine.addEntity(module_Stair_Straight_1M_6)

const module_Stair_Straight_1M_7 = new Entity()
module_Stair_Straight_1M_7.setParent(scene)
module_Stair_Straight_1M_7.addComponentOrReplace(gltfShape_20)
const transform_66 = new Transform({
  position: new Vector3(6, 10, 11.5),
  rotation: new Quaternion(0, -0.7071067811865478, 0, 0.7071067811865477),
  scale: new Vector3(1, 1, 1)
})
module_Stair_Straight_1M_7.addComponentOrReplace(transform_66)
engine.addEntity(module_Stair_Straight_1M_7)

const tree_01 = new Entity()
tree_01.setParent(scene)
const gltfShape_8 = new GLTFShape('models/Tree_01/Tree_01.glb')
tree_01.addComponentOrReplace(gltfShape_8)
const transform_23 = new Transform({
  position: new Vector3(7.5, 14, 9.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
tree_01.addComponentOrReplace(transform_23)
engine.addEntity(tree_01)

const stone_Module_4M_5 = new Entity()
stone_Module_4M_5.setParent(scene)
stone_Module_4M_5.addComponentOrReplace(gltfShape_2)
const transform_24 = new Transform({
  position: new Vector3(9.5, 10, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stone_Module_4M_5.addComponentOrReplace(transform_24)
engine.addEntity(stone_Module_4M_5)

const stone_Module_4M_6 = new Entity()
stone_Module_4M_6.setParent(scene)
stone_Module_4M_6.addComponentOrReplace(gltfShape_2)
const transform_25 = new Transform({
  position: new Vector3(13.5, 10, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
stone_Module_4M_6.addComponentOrReplace(transform_25)
engine.addEntity(stone_Module_4M_6)

const floorBaseDirt_02 = new Entity()
floorBaseDirt_02.setParent(scene)
const gltfShape_9 = new GLTFShape('models/FloorBaseDirt_02/FloorBaseDirt_02.glb')
floorBaseDirt_02.addComponentOrReplace(gltfShape_9)
const transform_26 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBaseDirt_02.addComponentOrReplace(transform_26)
engine.addEntity(floorBaseDirt_02)

const nft = new Entity()
nft.setParent(scene)
const nftShape = new NFTShape('ethereum://0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d/10011')
nft.addComponentOrReplace(nftShape)
const transform_27 = new Transform({
  position: new Vector3(7, 12, 11.4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
nft.addComponentOrReplace(transform_27)
engine.addEntity(nft)

const nft_2 = new Entity()
nft_2.setParent(scene)
const nftShape_2 = new NFTShape('ethereum://0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d/17552')
nft_2.addComponentOrReplace(nftShape_2)
const transform_33 = new Transform({
  position: new Vector3(9, 12, 11.4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
nft_2.addComponentOrReplace(transform_33)
engine.addEntity(nft_2)

const nft_3 = new Entity()
nft_3.setParent(scene)
const nftShape_3 = new NFTShape('ethereum://0xf5b0a3efb8e8e4c201e2a935f110eaaf3ffecb8d/8556')
nft_3.addComponentOrReplace(nftShape_3)
const transform_34 = new Transform({
  position: new Vector3(9, 12.5, 11.4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
nft_3.addComponentOrReplace(transform_34)
engine.addEntity(nft_3)

const grassPatchLarge_04 = new Entity()
grassPatchLarge_04.setParent(scene)
const gltfShape_10 = new GLTFShape('models/GrassPatchLarge_04/GrassPatchLarge_04.glb')
grassPatchLarge_04.addComponentOrReplace(gltfShape_10)
const transform_28 = new Transform({
  position: new Vector3(5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassPatchLarge_04.addComponentOrReplace(transform_28)
engine.addEntity(grassPatchLarge_04)

const grassPatchSmall_04 = new Entity()
grassPatchSmall_04.setParent(scene)
const gltfShape_11 = new GLTFShape('models/GrassPatchSmall_04/GrassPatchSmall_04.glb')
grassPatchSmall_04.addComponentOrReplace(gltfShape_11)
const transform_29 = new Transform({
  position: new Vector3(7, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassPatchSmall_04.addComponentOrReplace(transform_29)
engine.addEntity(grassPatchSmall_04)

const grassPatchLarge_04_2 = new Entity()
grassPatchLarge_04_2.setParent(scene)
grassPatchLarge_04_2.addComponentOrReplace(gltfShape_10)
const transform_30 = new Transform({
  position: new Vector3(4.5, 0, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassPatchLarge_04_2.addComponentOrReplace(transform_30)
engine.addEntity(grassPatchLarge_04_2)

const grassPatchLarge_04_3 = new Entity()
grassPatchLarge_04_3.setParent(scene)
grassPatchLarge_04_3.addComponentOrReplace(gltfShape_10)
const transform_31 = new Transform({
  position: new Vector3(8.5, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassPatchLarge_04_3.addComponentOrReplace(transform_31)
engine.addEntity(grassPatchLarge_04_3)

const grassPatchLarge_04_4 = new Entity()
grassPatchLarge_04_4.setParent(scene)
grassPatchLarge_04_4.addComponentOrReplace(gltfShape_10)
const transform_32 = new Transform({
  position: new Vector3(9, 0, 5.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
grassPatchLarge_04_4.addComponentOrReplace(transform_32)
engine.addEntity(grassPatchLarge_04_4)

// const hud:BuilderHUD =  new BuilderHUD()
// hud.attachToEntity(docksModuleStairs_01)