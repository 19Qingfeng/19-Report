<template>
    <div class="home-topview">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card shadow="hover">
                    <total-sales />
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <toatal-orders />
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <today-users />
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <total-users />
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import TotalSales from "../TotalSales";
import ToatalOrders from "../ToatlOrders";
import TodayUsers from "../TodayUsers";
import TotalUsers from "../TotalUsers";
// import SalesView from '../SalesView'
export default {
  name: "TopView",
  components: {
    TotalSales,
    ToatalOrders,
    TodayUsers,
    TotalUsers,
  },
};
</script>
