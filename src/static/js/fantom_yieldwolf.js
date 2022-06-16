$(function () {		
    consoleInit(main)		
    });		
    		
    		
    const YIELDWOLF_CHEF_ABI = [{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IERC20","name":"stakeToken","type":"address"},{"indexed":false,"internalType":"contract IYieldWolfStrategy","name":"strategy","type":"address"}],"name":"Add","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"}],"name":"AddRule","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bountyReward","type":"uint256"}],"name":"Earn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"ruleIndex","type":"uint256"}],"name":"ExecuteRule","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ruleIndex","type":"uint256"}],"name":"RemoveRule","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"depositFee","type":"uint256"}],"name":"SetDepositFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"feeAddress","type":"address"}],"name":"SetFeeAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"feeAddressSetter","type":"address"}],"name":"SetFeeAddressSetter","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"bool","name":"isOperator","type":"bool"}],"name":"SetOperator","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"performanceFee","type":"uint256"}],"name":"SetPerformanceFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"performanceFeeBountyPct","type":"uint256"}],"name":"SetPerformanceFeeBountyPct","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ruleFee","type":"uint256"}],"name":"SetRuleFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ruleFeeBountyPct","type":"uint256"}],"name":"SetRuleFeeBountyPct","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IYieldWolfStrategy","name":"_strategy","type":"address"},{"indexed":false,"internalType":"address[]","name":"_extraEarnTokens","type":"address[]"}],"name":"SetStrategyExtraEarnTokens","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IYieldWolfStrategy","name":"strategy","type":"address"},{"indexed":false,"internalType":"address","name":"router","type":"address"}],"name":"SetStrategyRouter","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IYieldWolfStrategy","name":"_strategy","type":"address"},{"indexed":false,"internalType":"address","name":"_token0","type":"address"},{"indexed":false,"internalType":"address","name":"_token1","type":"address"},{"indexed":false,"internalType":"address[]","name":"_path","type":"address[]"}],"name":"SetStrategySwapPath","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IYieldWolfStrategy","name":"strategy","type":"address"},{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SetStrategySwapRouterEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"withdrawFee","type":"uint256"}],"name":"SetWithdrawFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"contract IYieldWolfStrategy","name":"_strategy","type":"address"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IYieldWolfStrategy[]","name":"_strategies","type":"address[]"}],"name":"addMany","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_condition","type":"address"},{"internalType":"uint256[]","name":"_conditionIntInputs","type":"uint256[]"},{"internalType":"address[]","name":"_conditionAddrInputs","type":"address[]"},{"internalType":"address","name":"_action","type":"address"},{"internalType":"uint256[]","name":"_actionIntInputs","type":"uint256[]"},{"internalType":"address[]","name":"_actionAddrInputs","type":"address[]"}],"name":"addRule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_ruleIndex","type":"uint256"}],"name":"checkRule","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_depositAmount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"depositFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_depositAmount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"depositTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"earn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_pids","type":"uint256[]"}],"name":"earnMany","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_ruleIndex","type":"uint256"}],"name":"executeRule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeAddressSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"operators","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"performanceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"performanceFeeBountyPct","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"stakeToken","type":"address"},{"internalType":"contract IYieldWolfStrategy","name":"strategy","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_ruleIndex","type":"uint256"}],"name":"removeRule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"ruleFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ruleFeeBountyPct","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_depositFee","type":"uint256"}],"name":"setDepositFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddressSetter","type":"address"}],"name":"setFeeAddressSetter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"bool","name":"_isOperator","type":"bool"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_performanceFee","type":"uint256"}],"name":"setPerformanceFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_performanceFeeBountyPct","type":"uint256"}],"name":"setPerformanceFeeBountyPct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ruleFee","type":"uint256"}],"name":"setRuleFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_ruleFeeBountyPct","type":"uint256"}],"name":"setRuleFeeBountyPct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IYieldWolfStrategy","name":"_strategy","type":"address"},{"internalType":"address[]","name":"_extraEarnTokens","type":"address[]"}],"name":"setStrategyExtraEarnTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IYieldWolfStrategy","name":"_strategy","type":"address"},{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"},{"internalType":"address[]","name":"_path","type":"address[]"}],"name":"setStrategySwapPath","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IYieldWolfStrategy","name":"_strategy","type":"address"},{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setStrategySwapRouterEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawFee","type":"uint256"}],"name":"setWithdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"stakedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"strategyExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_ruleIndex","type":"uint256"}],"name":"userPoolRule","outputs":[{"components":[{"internalType":"address","name":"condition","type":"address"},{"internalType":"uint256[]","name":"conditionIntInputs","type":"uint256[]"},{"internalType":"address[]","name":"conditionAddrInputs","type":"address[]"},{"internalType":"address","name":"action","type":"address"},{"internalType":"uint256[]","name":"actionIntInputs","type":"uint256[]"},{"internalType":"address[]","name":"actionAddrInputs","type":"address[]"}],"internalType":"struct YieldWolf.Rule","name":"rule","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"userRuleLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"userStakedPoolAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"userStakedPoolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

    const STRATEGY_ABI = [{"anonymous":false,"inputs":[],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[],"name":"Farm","type":"event"},{"anonymous":false,"inputs":[],"name":"Initialize","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"}],"name":"TokenToEarn","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[],"name":"WrapNative","type":"event"},{"inputs":[],"name":"WNATIVE","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_depositAmount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bountyHunter","type":"address"}],"name":"earn","outputs":[{"internalType":"uint256","name":"bountyReward","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earnToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyWithdrawn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"extraEarnTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"farm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"bool","name":"_isLpToken","type":"bool"},{"internalType":"address[7]","name":"_addresses","type":"address[7]"},{"internalType":"address[]","name":"_earnToToken0Path","type":"address[]"},{"internalType":"address[]","name":"_earnToToken1Path","type":"address[]"},{"internalType":"address[]","name":"_token0ToEarnPath","type":"address[]"},{"internalType":"address[]","name":"_token1ToEarnPath","type":"address[]"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityRouter","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterChef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_extraEarnTokens","type":"address[]"}],"name":"setExtraEarnTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"},{"internalType":"address[]","name":"_path","type":"address[]"}],"name":"setSwapPath","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapRouterEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharesTotal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakeToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"swapPath","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapRouter","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapRouterEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"tokenToEarn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalStakeTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawAmount","type":"uint256"},{"internalType":"address","name":"_withdrawTo","type":"address"},{"internalType":"address","name":"_bountyHunter","type":"address"},{"internalType":"uint256","name":"_ruleFeeAmount","type":"uint256"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wrapNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yieldWolf","outputs":[{"internalType":"contract IYieldWolf","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]

    async function main() {		
        const App = await init_ethers();		
    		
        _print(`Initialized ${App.YOUR_ADDRESS}\n`);		
        _print("Reading smart contracts...\n");		
    		
        const YIELDWOLF_CHEF_ADDR = "0x876f890135091381c23be437fa1cec2251b7c117";		
        const YIELDWOLF_CHEF = new ethers.Contract(YIELDWOLF_CHEF_ADDR, YIELDWOLF_CHEF_ABI, App.provider);
        const tokens = {};		
        const prices = await getFantomPrices();		
    		
        await loadYieldWolfContract(App, tokens, prices, YIELDWOLF_CHEF, YIELDWOLF_CHEF_ADDR, YIELDWOLF_CHEF_ABI);
    		
        hideLoading();		
    }

async function getWolfPoolInfo(app, chefContract, chefAddress, poolIndex) {
  const poolInfo = await chefContract.poolInfo(poolIndex);
  const stratAddress = poolInfo.strategy;
  const stratContract = new ethers.Contract(stratAddress, STRATEGY_ABI, app.provider);
  const poolToken = await getGeneralEthcallToken(app, poolInfo.stakeToken, chefAddress);
  poolToken.staked = await stratContract.totalStakeTokens() / 10 ** poolToken.decimals;
  const staked = await chefContract.userInfo(poolIndex, app.YOUR_ADDRESS) / 10 ** poolToken.decimals;
  return {
      address : poolInfo.stakeToken,
      poolToken: poolToken,
      userStaked : staked
  };
}

async function loadYieldWolfContract(App, tokens, prices, chef, chefAddress, chefAbi) {
  const chefContract = chef ?? new ethers.Contract(chefAddress, chefAbi, App.provider);

  const poolCount = parseInt(await chefContract.poolLength(), 10);

  _print(`<a href='https://ftmscan.com/address/${chefAddress}' target='_blank'>Staking Contract</a>`);
  _print(`Found ${poolCount} pools.\n`)
  _print("This may take more than 3 minutes.\n")

  const poolInfos = await Promise.all([...Array(poolCount).keys()].map(async (x) =>
    await getWolfPoolInfo(App, chefContract, chefAddress, x)));

  var tokenAddresses = [].concat.apply([], poolInfos.filter(x => x.poolToken).map(x => x.poolToken.tokens));

  await Promise.all(tokenAddresses.map(async (address) => {
      tokens[address] = await getGeneralEthcallToken(App, address, chefAddress);
  }));

  const poolPrices = poolInfos.map(poolInfo => poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "fantom") : undefined);


  _print("Finished reading smart contracts.\n");

  let aprs = []
  for (i = 0; i < poolCount; i++) {
    if (poolPrices[i]) {
      const apr = printWolfPool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i], "fantom")
      aprs.push(apr);
    }
  }
  let totalUserStaked=0, totalStaked=0;
  for (const a of aprs) {
    if (!isNaN(a.totalStakedUsd)) {
      totalStaked += a.totalStakedUsd;
    }
    if (a.userStakedUsd > 0) {
      totalUserStaked += a.userStakedUsd;
      averageApr += a.userStakedUsd * a.yearlyAPR / 100;
    }
  }
  _print_bold(`Total Staked: $${formatMoney(totalStaked)}`);
  if (totalUserStaked > 0) {
    _print_bold(`\nYou are staking a total of $${formatMoney(totalUserStaked)}`)
  }
  return { prices, totalUserStaked, totalStaked }
}

function printWolfPool(App, chefAbi, chefAddr, prices, tokens, poolInfo, poolIndex, poolPrices, chain="eth") {
  const fixedDecimals = 2;
  const sp = (poolInfo.stakedToken == null) ? null : getPoolPrices(tokens, prices, poolInfo.stakedToken, chain);
  const userStaked = poolInfo.userLPStaked ?? poolInfo.userStaked;
  const staked_tvl = sp?.staked_tvl ?? poolPrices.staked_tvl;
  _print_inline(`${poolIndex} - `);
  poolPrices.print_price(chain);
  sp?.print_price(chain);
  const apr = printWolfAPR(poolPrices.stakeTokenTicker, staked_tvl, userStaked, poolPrices.price, fixedDecimals);
  if (poolInfo.userLPStaked > 0) sp?.print_contained_price(userStaked);
  if (poolInfo.userStaked > 0) poolPrices.print_contained_price(userStaked);
  printWolfContractLinks(App, chefAbi, chefAddr, poolIndex, poolInfo.address, poolPrices.stakeTokenTicker, poolInfo.poolToken.unstaked,
    poolInfo.userStaked, fixedDecimals);
  return apr;
}

function printWolfContractLinks(App, chefAbi, chefAddr, poolIndex, poolAddress, stakeTokenTicker, unstaked, userStaked, fixedDecimals) {
  fixedDecimals = fixedDecimals ?? 2;
  const approveAndStake = async function() {
    return chefContract_stake(chefAbi, chefAddr, poolIndex, poolAddress, App)
  }
  const unstake = async function() {
    return chefContract_unstake(chefAbi, chefAddr, poolIndex, App)
  }
  _print_link(`Stake ${unstaked.toFixed(fixedDecimals)} ${stakeTokenTicker}`, approveAndStake)
  _print_link(`Unstake ${userStaked.toFixed(fixedDecimals)} ${stakeTokenTicker}`, unstake)
  _print("");
}

function printWolfAPR(stakeTokenTicker, staked_tvl, userStaked, poolTokenPrice, fixedDecimals) {
  fixedDecimals = fixedDecimals ?? 2;
  var userStakedUsd = userStaked * poolTokenPrice;
  var userStakedPct = userStakedUsd / staked_tvl * 100;
  _print(`You are staking ${userStaked.toFixed(fixedDecimals)} ${stakeTokenTicker} ($${formatMoney(userStakedUsd)}), ${userStakedPct.toFixed(2)}% of the pool.`);
  return {
    userStakedUsd,
    totalStakedUsd : staked_tvl,
    userStakedPct
  }
}