import { PageHeader } from './components/page-header';
import { StatsCard } from './components/stats-card';
import { SalesChart } from './components/sales-chart';
import { Users, DollarSign, TrendingUp, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-muted/40">
      <PageHeader />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard title="Total Revenue" value="$45,231" change="+20.1% from last month" icon={DollarSign} />
            <StatsCard title="Subscriptions" value="+2350" change="+180.1% from last month" icon={Users} />
            <StatsCard title="Sales" value="+12,234" change="+19% from last month" icon={TrendingUp} />
            <StatsCard title="Active Now" value="+573" change="+201 since last hour" icon={Activity} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SalesChart />
            {/* You can add another chart or component here */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Activity feed will go here.</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};