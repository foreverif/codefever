const data = {
  Added: '已添加',
  created: '已创建',
  updated: '已更新',
  removed: '已移除',
  deleted: '已删除',
  copied: '已拷贝',
  merged: '已合并',
  opened: '已打开',
  closed: '已关闭',
  binded: '已绑定',
  unbinded: '已解绑',
  verified: '已验证',
  approved: '已评审',
  enabled: '已恢复',
  disabled: '已禁用',
  reseted: '已重置',
  createPersonalGroupNotice: '至少需要创建一个仓库组作为个人仓库组',

  emailCodeHasSendNewEmail: '验证码已经发送至新的邮箱',
  phoneCodeHasSendNewPhone: '验证码已经发送至新的手机',
  finishIdentityVerify: '前请输入您的账号密码以完成身份验证',
  unbindEnterCodeFeverPassword: '若确认，请输入您的CodeFever账号密码以验证身份',
  scanQrcodeBind: '请使用微信扫描二维码完成绑定',
  theAccountUsedWechat_N: '该账号曾使用微信"{n}"与蒲公英旗下产品小程序绑定，确认使用当前微信账号替换"{n}"的绑定吗?',
  rebindWechat: '取消，更换微信后重新绑定',
  unbindAllProduct: '解除绑定，您将同时解绑蒲公英旗下所有产品',
  mfaGuide: '打开具有 MFA 功能的 App 并扫描下方二维码，输入 App 上的显示的两组不同的 MFA 密码并点击 保存 按钮完成 MFA 设备设置。你可以在任何手机应用市场搜索 MFA 下载你信任的 App。',

  inputEmailToAddMemeber: '输入用户的注册邮箱以添加为成员',
  groupMemberCanControlRepositoryNotice: '此仓库所在仓库组的成员对于此仓库的控制权由其仓库组角色决定',

  repositoryChangeCreatorNotice: '您确定需要更换此仓库创建者吗 ? 新的创建着将拥有仓库所有管理权限, 且曾经的创建者将会拥有 所有者 角色',
  repositoryChangeURLNotice: '您确定需要更改此仓库 URL 吗 ? URL 更改后，不能再使用原 URL 管理仓库, git 客户端使用的仓库地址也会同步变更, 您需要使用 git remote 命令重新设置仓库地址',
  repositoryDeleteRepositoryNotice: '您确定要删除此仓库吗 ? 仓库删除后此仓库不再可用, 仓库内的 文件 和 相关记录 都会不可逆的被删除, 请确认需要保留的文件已经备份完成, 点击 取消 按钮可以取消操作。',
  repositoryDeleteRepositoryConfirmNotice: '需要您再次确认删除此仓库 ? 此仓库删除后, 所有信息和文件都会被不可逆删除, 此操作造成的后果不可恢复, 请确认需要保留的文件已经备份完成, 点击 取消 按钮可以取消此操作。',

  groupChangeCreatorNotice: '您确定需要更换此仓库组创建者吗 ? 新的创建着将拥有仓库组所有管理权限, 且曾经的创建者将会拥有 所有者 角色, 注意个人默认仓库组不能更改创建者',
  groupChangeURLNotice: '您确定需要更改此仓库组 URL 吗 ? URL 更改后，不能再使用原 URL 管理仓库组, git 客户端使用的组内仓库地址也会同步变更, 您需要使用 git remote 命令重新设置仓库地址',
  groupDeleteRepositoryNotice: '您确定要删除此仓库组吗 ? 仓库组删除后不再可用, 仓库组内的 相关记录 都会不可逆的被删除, 在删除此仓库组前请手动删除组内所有仓库, 点击 取消 按钮可以取消操作。',
  groupDeleteRepositoryConfirmNotice: '需要您再次确认删除此仓库组 ? 此仓库组删除后, 所有信息都会被不可逆删除, 此操作造成的后果不可恢复, 在删除此仓库组前请手动删除组内所有仓库, 点击 取消 按钮可以取消此操作。',

  inputCommitFilter: '输入提交信息过滤',
  repositoryEmpty: '仓库为空',
  displaySource: '展示源码',
  displayRendereFile: '展示渲染内容',
  fileContentEmpty: '文件内容为空',
  fileContentOversize: '文件大小超过允许展示的最大限度, 请在本地查看',
  fileTypeNotSupport: '暂不支持二进制文件的展示',
  diffFileToMany: '超过允许展示的最大文件数量, 请在本地查看',

  _S_empty: '请输入{s}',
  repository_S_empty: '仓库内还没有{s}',
  repositoryBranchEmpty: 'Git分支，本质上是指向提交对象的可变指针。使用 git 命令创建分支： \'git branch 新分支名称 旧分支名称\'',
  repositoryTagEmpty: '标签是某一时间点上的版本，通常使用标签标识代码库的重要版本，如在项目的里程碑创建标签。也可以使用 git 命令创建标签：git tag -a v1.0 -m \'版本 1.0\'',
  mergeRequestEmpty: '未找到相关合并请求记录',
  addNewCommit: '新增一个提交',
  alreadyMergeRequest: '已经合并请求',
  alreadyCloseRequest: '已经关闭请求',
  assignReviewerTitle: '指定评审员（只能指定1人）',
  selectReviewer: '选择评审员',
  notSelectReviewers: '未指定评审员',
  deleteReviewer: '清除评审员',
  notApprove: '未评审',
  assign_N_M_Reviewer: '指定 {n} 为和并请求 {m} 的评审员',
  delete_M_N_Reviewer: '删除了和并请求 {m} 的评审员 {n}',
  review_M_Reviewer: '评审了和并请求 {m} 的代码',

  _S_listEmpty: '{s}列表为空',
  repositoryListEmptyNotice: '创建一个仓库, 开始体验吧',
  groupListEmptyNotice: '创建一个仓库组, 组织并管理组内仓库',

  input_S_name: '输入{s}名过滤',
  confirmDelete: '确认删除{s}?',

  jumpWithLink: '跳转链接',
  noRepositoryFind: '没有查看权限',
  noCommitRecord: '暂无提交记录',
  plsInputInvitedEmail: '请输入被邀请人邮箱',
  repositoryDeleteTipFirst: '删除项目将删除其存储库和所有相关资源，包括问题、合并请求等',
  repositoryDeleteTipSecond: '无法还原已删除的项目!',
  inputMergeCommit: '请输入合并的提交信息, 并根据情况勾选是否使用squash功能',
  selectDifferentBranch: '必须选择不同的分支进行合并',
  mergeConflictTitle: '你要合并的两个分支有代码冲突，请根据下面的命令在本地进行合并',
  mergeConflictTip1: '第一步:拉取代码并新建合并请求的分支',
  mergeConflictTip2: '第二步:本地检查代码更改',
  mergeConflictTip3: '第三步:合并分支并解决冲突',
  mergeConflictTip4: '第四步:将代码推送到codeForge平台',
  from_S_Merge_S: '从 {s1} 请求合并到 {s2}',

  defaultGroupReqiured: '需要默认仓库组',
  defaultGroupReqiuredDescription: '您需要至少创建一个仓库组用于存放仓库',

  someVersion: '相关版本',
  backHome: '回到首页',
  inputSSHKEYContent: '请输入 SSH Key 内容',
  inputSSHKEYName: '请输入 SSH Key 名称',
  defaultBranchDescription: '默认分支被视为代码库中的基本分支, 是所有克隆、代码提交和合并请求的目标分支',
  settingToDefaultBranch: '设置为默认分支',
  updateDefaultBranch: '修改默认分支',
  settingDefaultBranch: '请设置默认分支',
  protectedBranchDescription: '保护分支会保障分支安全性, 不允许除所有者以外角色进行强制推送及删除',
  protectedBranchRuleEmpty: '目前无保护分支规则, 请新建保护分支规则, 保护分支安全',
  inputBranchOrRegexp: '请输入分支名称或通用符规则',
  createProtectedBranchRule: '新建保护分支规则',
  updateProtectedBranchRule: '修改保护分支规则',
  deleteProtectedBranchRule: '删除保护分支规则',
  noBodyAllow: '不允许任何人',

  primaryEmail: '主邮箱地址',
  primaryEmailDescription: '当前 CodeFever 账号的邮箱地址, 用于接收相关通知, 密码重置, 登录等操作',
  updatePrimaryEmail: '更改主邮箱地址',
  myEmail: '我的邮箱地址',
  myEmailDescription: '多邮箱功能用于同一用户有多个不同邮箱用于提交代码, 系统可识别并创建关联关系',
  addEmail: '新建邮箱地址',
  contactedEmail: '已关联邮箱',
  shouldValidation: '待验证',
  resendEmail: '重发邮件',

  differenceBetweenHTTPSAndSSH: 'HTTPS 与 SSH 有什么区别 ?',
  generateAndSetSSHKey: '请确认客户端的 SSH Key 已经生成并且在 CodeFever 上正确设置。',
  itsMyEmail: '这是我的邮箱',

  notificationSystem: '系统消息',
  notificationMention: '提到我的',
  tagRead: '标记为已读',
  tagAllRead: '标记所有为已读',
  deleteAllReaded: '删除所有已读用户消息',
  mergeRequestNotification: '合并请求通知',
  mergeRequestNotificationDesc: '可接收仓库成员发布的和并请求通知, 开发者及以上成员可接收',
  emailNotification: '邮件通知',
  emailNotificationDesc: '通知设置中的消息将发送到您的注册邮箱中。',

  searchByName: '查找姓名或邮箱',
  userStatusEnabled: '恢复确认',
  userStatusDisabled: '禁用确认',
  userStatusEnabled_N: '确认恢复用户 "{n}" ?',
  userStatusDisabled_N: '确认禁用用户 "{n}" ?',
  closeMFA: '关闭2FA认证',
  closeMFAConfirm: '关闭2FA认证确认',
  closeMFA_N: '确认关闭用户 "{n}" 2FA认证?',
  resetPassword: '重置密码',
  reset_N_Password: '重置用户 "{n}" 密码',
  searchRepository: '查找仓库',
  searchGroup: '查找仓库组',
  roleToOwner: '指定为所有者',
  setGroupOwner_S: '确定指定 {s} 为仓库组的所有者?',
  setAdministrator: '设置为管理员',
  cancelAdministrator: '取消管理员',
  memberRemoveConfirm: '成员删除确认',
  successAddUser: '添加用户成功'
}

export default { ...data, __namespace__: 'message' }
